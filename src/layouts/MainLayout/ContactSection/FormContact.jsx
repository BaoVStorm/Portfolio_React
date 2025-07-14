import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

import './ContactSection.scss';
import { formContact } from '~/configs/FormKey';

function FormContact() {
    return (
        <form action={formContact.action} method="POST" class="detail-box-contact">
            <input type="hidden" name="access_key" value={formContact.access_key} />

            <div class="decorate-contact">
                <FontAwesomeIcon icon={faInbox} />
            </div>

            <label for="name-contact">
                <p>name</p>
            </label>
            <input type="text" name="name-contact" id="name-contact" required />

            <label for="email-contact">
                <p>email</p>
            </label>
            <input type="email" name="email-contact" id="email-contact" required />

            <label for="subject-contact">
                <p>subject</p>
            </label>
            <input type="text" name="subject-contact" id="subject-contact" required />

            <label for="message-contact">
                <p>message</p>
            </label>
            <textarea name="message-contact" id="message-contact" wrap="soft" rows="6" required></textarea>

            <div class="button-contact">
                <div class="ani-hover">
                    <input type="submit" id="button-contact" value="SEND MESSAGE" />
                </div>
            </div>
        </form>
    );
}

export default FormContact;
