import Input from './UI/Input'
import Bouton from './UI/Bouton'

function Form() {

    return (
        <form action="" className='ticketform gap-7 flex flex-col w-full md:w-1/3'>
            <Input label="Prénom" type="text" name="firstname" required />
            <Input label="Nom" type="text" name="lastname" required />
            <Input label="Email" type="email" name="email" required />
            <Input label="Confirmer l'email" type="email" name="confirmEmail" required />
            <Bouton type="submit" title="S'inscrire" />
        </form>
    )
}

export default Form