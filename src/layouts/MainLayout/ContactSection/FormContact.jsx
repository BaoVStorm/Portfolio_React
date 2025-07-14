import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import './ContactSection.scss';
import { formContact } from '~/configs/FormKey';

function FormContact() {
    return (
        <form action={formContact.action} method="POST" className="detail-box-contact">
            <input type="hidden" name="access_key" value={formContact.access_key} />

            <div className="decorate-contact">
                <FontAwesomeIcon icon={faInbox} />
            </div>

            <label htmlFor="name-contact">
                <p>name</p>
            </label>
            <input type="text" name="name-contact" id="name-contact" required />

            <label htmlFor="email-contact">
                <p>email</p>
            </label>
            <input type="email" name="email-contact" id="email-contact" required />

            <label htmlFor="subject-contact">
                <p>subject</p>
            </label>
            <input type="text" name="subject-contact" id="subject-contact" required />

            <label htmlFor="message-contact">
                <p>message</p>
            </label>
            <textarea name="message-contact" id="message-contact" wrap="soft" rows="6" required></textarea>

            <div className="button-contact">
                <div className="ani-hover">
                    <input type="submit" id="button-contact" value="SEND MESSAGE" />
                </div>
            </div>
        </form>
    );
}

export default FormContact;
