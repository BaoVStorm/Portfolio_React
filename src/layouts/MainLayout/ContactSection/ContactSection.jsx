import './ContactSection.scss';
import FormContact from './FormContact';
import BoxContact from './BoxContact';

function ContactSection() {
    return (
        <section id="contact" class="section">
            <h1 class="title-section">contact</h1>
            <div class="box-contact">
                <FormContact />
                <BoxContact />
            </div>
        </section>
    );
}

export default ContactSection;
