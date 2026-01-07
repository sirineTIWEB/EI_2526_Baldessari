import LogIn from '../composants/LogIn.jsx';

function Admin() {
    return (
        <section className='flex flex-row h-[90vh]'>
            <div className='w-1/2 md:flex hidden'>
            </div>
            <div className='w-full md:w-1/2 flex flex-col gap-36 justify-center items-center'>
                <div>
                    <h5>Accès Administrateur</h5>
                    <h3>Entrez vos données pour continuer.</h3>
                </div>
                <LogIn />
            </div>

        </section>
    )
}

export default Admin;