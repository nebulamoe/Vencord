import { React } from "@webpack/common";
import { settings } from "../settings";

const classes = {
    channel: "channel_c91bad",
    container: "container_d91ad9",
    interactive: "interactive_f5eb4b",
    linkButton: "linkButton_c91bad",
    link: "link_c91bad",
    avatarWithText: "avatarWithText_c91bad",
    layout: "layout_ec8679",
    avatar: "avatar_ec8679",
    linkButtonIcon: "icon_fc4f04",
    content: "content_ec8679",
    nameAndDecorators: "nameAndDecorators_ec8679",
    name: "name_ec8679"
};

export function renderGroupDMsButton() {
    if (!settings.store.enableButton) return null;

    return (
        <li
            className={`${classes.channel} ${classes.container}`}
            role="listitem"
            aria-posinset="1"
            aria-setsize="75"
        >
            <div className={`${classes.interactive} ${classes.linkButton}`}>
                <a
                    className={classes.link}
                    href="#"
                    tabIndex={0}
                >
                    <div className={`${classes.avatarWithText} ${classes.layout}`}>
                        <div className={classes.avatar}>
                            <svg x="0" y="0" className={classes.linkButtonIcon} aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z" />
                            </svg>
                        </div>
                        <div className={classes.content}>
                            <div className={classes.nameAndDecorators}>
                                <div className={classes.name}>Group DMs</div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    );
}