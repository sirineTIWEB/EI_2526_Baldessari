import Form from '../composants/Form'

function Contact() {

    return (
        <section className='my-5 md:my-0 md:h-screen md:justify-evenly flex flex-col items-center gap-10 md:gap-20'>
            <h1 className='text-center'>Gagner des tickets</h1>
            <section className='flex justify-between flex-col md:flex-row md:mx-24 mx-12 gap-12 md:gap-0'>
                <div className='flex flex-col gap-6 md:gap-12 w-full md:w-1/2'>
                    <h5>Tente de gagner des tickets pour découvrir l’exposition sur place, au plus près des œuvres.</h5>
                    <div className='flex flex-col gap-2.5'>
                        <h3>Les inscriptions sont ouvertes jusqu’au [date à compléter] à 23h59.</h3>
                        <h3>Les gagnant·e·s seront tiré·e·s au sort après la clôture des inscriptions.</h3>
                    </div>
                </div>
                <Form />
            </section>
        </section>
    )
}
export default Contact;