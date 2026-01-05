import Ticket from "./Ticket";

function Tarifs() {
    const tarifs = [
        {
            "id": 1,
            "title": "standard",
            "prix": "€18.00"
        },
        {
            "id": 2,
            "title": "< 26ans",
            "prix": "€13.00"
        },
        {
            "id": 3,
            "title": "< 18ans>",
            "prix": "€00.00"
        },
        {
            "id": 4,
            "title": "museumPASSmusées",
            "prix": "€00.00"
        }
    ]


    return (
        <section className="md:mx-24 mx-12 flex md:gap-y-10 md:gap-x-12 flex-wrap">
            <h2 className="w-full text-left">Tarifs</h2>
            {tarifs.map((tarif, index) => (
                <Ticket key={index} titre={tarif.title} prix={tarif.prix} />
            ))}

        </section>
    )
}
export default Tarifs;