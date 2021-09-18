// / <reference types="react" />
import * as react from 'react';
import { JSX } from '@skyra/discord-components-core';

interface StyleReactProps {
    class?: string;
    className?: string;
    style?: {
        [key: string]: any;
    };
}

declare const DiscordActionRow: react.ForwardRefExoticComponent<JSX.DiscordActionRow & Omit<react.HTMLAttributes<HTMLDiscordActionRowElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordActionRowElement>>;
declare const DiscordAttachment: react.ForwardRefExoticComponent<JSX.DiscordAttachment & Omit<react.HTMLAttributes<HTMLDiscordAttachmentElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordAttachmentElement>>;
declare const DiscordAttachments: react.ForwardRefExoticComponent<JSX.DiscordAttachments & Omit<react.HTMLAttributes<HTMLDiscordAttachmentsElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordAttachmentsElement>>;
declare const DiscordButton: react.ForwardRefExoticComponent<JSX.DiscordButton & Omit<react.HTMLAttributes<HTMLDiscordButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordButtonElement>>;
declare const DiscordCommand: react.ForwardRefExoticComponent<JSX.DiscordCommand & Omit<react.HTMLAttributes<HTMLDiscordCommandElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordCommandElement>>;
declare const DiscordEmbed: react.ForwardRefExoticComponent<JSX.DiscordEmbed & Omit<react.HTMLAttributes<HTMLDiscordEmbedElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordEmbedElement>>;
declare const DiscordEmbedField: react.ForwardRefExoticComponent<JSX.DiscordEmbedField & Omit<react.HTMLAttributes<HTMLDiscordEmbedFieldElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordEmbedFieldElement>>;
declare const DiscordEmbedFields: react.ForwardRefExoticComponent<JSX.DiscordEmbedFields & Omit<react.HTMLAttributes<HTMLDiscordEmbedFieldsElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordEmbedFieldsElement>>;
declare const DiscordInvite: react.ForwardRefExoticComponent<JSX.DiscordInvite & Omit<react.HTMLAttributes<HTMLDiscordInviteElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordInviteElement>>;
declare const DiscordMention: react.ForwardRefExoticComponent<JSX.DiscordMention & Omit<react.HTMLAttributes<HTMLDiscordMentionElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordMentionElement>>;
declare const DiscordMessage: react.ForwardRefExoticComponent<JSX.DiscordMessage & Omit<react.HTMLAttributes<HTMLDiscordMessageElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordMessageElement>>;
declare const DiscordMessages: react.ForwardRefExoticComponent<JSX.DiscordMessages & Omit<react.HTMLAttributes<HTMLDiscordMessagesElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordMessagesElement>>;
declare const DiscordReaction: react.ForwardRefExoticComponent<JSX.DiscordReaction & Omit<react.HTMLAttributes<HTMLDiscordReactionElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordReactionElement>>;
declare const DiscordReactions: react.ForwardRefExoticComponent<JSX.DiscordReactions & Omit<react.HTMLAttributes<HTMLDiscordReactionsElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordReactionsElement>>;
declare const DiscordReply: react.ForwardRefExoticComponent<JSX.DiscordReply & Omit<react.HTMLAttributes<HTMLDiscordReplyElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordReplyElement>>;
declare const DiscordSystemMessage: react.ForwardRefExoticComponent<JSX.DiscordSystemMessage & Omit<react.HTMLAttributes<HTMLDiscordSystemMessageElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordSystemMessageElement>>;
declare const DiscordTenorVideo: react.ForwardRefExoticComponent<JSX.DiscordTenorVideo & Omit<react.HTMLAttributes<HTMLDiscordTenorVideoElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLDiscordTenorVideoElement>>;

export { DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo };
