import { useState } from 'react'
import Input from './UI/Input'
import Bouton from './UI/Bouton'

function Form() {

    // Données du formulaire
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        confirmEmail: ''
    })

    // Gestion des erreurs de validation
    const [errors, setErrors] = useState({})

    // confirmation d'envoi
    const [success, setSuccess] = useState(false)

    // Indicateur de chargement lors de l'envoi du formulaire
    const [loading, setLoading] = useState(false)

    // Regex pour validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        // Mettre à jour les données du formulaire
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Effacer l'erreur
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    // Gestion de la soumission du formulaire avec envoi AJAX
    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccess(false)
        const newErrors = {}

        // Validation prénom
        if (!formData.firstname.trim()) {
            newErrors.firstname = 'Le prénom est requis'
        }

        // Validation nom
        if (!formData.lastname.trim()) {
            newErrors.lastname = 'Le nom est requis'
        }

        // Validation email
        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis'
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Format d\'email invalide'
        }

        // Validation confirmation email
        if (!formData.confirmEmail.trim()) {
            newErrors.confirmEmail = 'La confirmation de l\'email est requise'
        } else if (formData.email !== formData.confirmEmail) {
            newErrors.confirmEmail = 'Les emails ne correspondent pas'
        }

        // Si erreurs, les afficher et arrêter
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        // Formulaire valide, envoyer les données en AJAX vers le serveur PHP
        setLoading(true)
        setErrors({})

        try {
            const response = await fetch('/php/send-mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstname: formData.firstname,
                    lastname: formData.lastname,
                    email: formData.email
                })
            })

            const data = await response.json()

            if (response.ok && data.success) {
                setSuccess(true)
                // Réinitialiser le formulaire après succès
                setFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    confirmEmail: ''
                })
            } else {
                setErrors({ submit: data.message || 'Une erreur est survenue lors de l\'envoi' })
            }
        } catch (error) {
            setErrors({ submit: 'Erreur de connexion au serveur' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='ticketform gap-7 flex flex-col w-full md:w-1/3'>
            {/* Message de succès */}
            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    <h3>Inscription réussie !</h3>
                </div>
            )}

            {/* Message d'erreur générale */}
            {errors.submit && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <h3>{errors.submit}</h3>
                </div>
            )}

            <div>
                <Input
                    label="Prénom"
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                />
                {errors.firstname && <h3 className="text-red-500 mt-1">{errors.firstname}</h3>}
            </div>

            <div>
                <Input
                    label="Nom"
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                />
                {errors.lastname && <h3 className="text-red-500 mt-1">{errors.lastname}</h3>}
            </div>

            <div>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <h3 className="text-red-500 mt-1">{errors.email}</h3>}
            </div>

            <div>
                <Input
                    label="Confirmer l'email"
                    type="email"
                    name="confirmEmail"
                    value={formData.confirmEmail}
                    onChange={handleChange}
                />
                {errors.confirmEmail && <h3 className="text-red-500 mt-1">{errors.confirmEmail}</h3>}
            </div>

            <Bouton
                type="submit"
                title={loading ? 'Envoi en cours...' : 'S\'inscrire'}
                disabled={loading}
            />
        </form>
    )
}

export default Form