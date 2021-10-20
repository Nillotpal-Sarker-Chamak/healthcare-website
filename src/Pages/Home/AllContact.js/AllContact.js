import ContactInfo from "../ContactInfo/ContactInfo";
import './contacts.css';


const AllContacts = [
    {
        name: 'Gynae Department',
        Phone: '017*******'
    },
    {
        name: 'Medicine Department',
        Phone: '017*******'
    },
    {
        name: 'ENT Department',
        Phone: '017*******'
    },
    {
        name: 'Surgery Department',
        Phone: '017*******'
    },
    {
        name: 'For Ambulance',
        Phone: '017*******'
    },
]

const Contacts = () => {
    return (
        <div className="container-fluid" >
            <h2 className="text-primary mt-5">For Any Query Please Contact:</h2>
            <div className="row contacts">
                {
                    AllContacts.map(contact => <ContactInfo
                        key={contact.name}
                        contact={contact}
                    ></ContactInfo>)
                }
            </div>
        </div>
    );
};

export default Contacts;