import './ContactSection.scss';
import FormContact from './FormContact';
import BoxContact from './BoxContact';

function ContactSection() {
    return (
        <section id="contact" className="section">
            <h1 className="title-section">contact</h1>
            <div className="box-contact">
                <FormContact />
                <BoxContact />
            </div>
        </section>
    );
}

export default ContactSection;
