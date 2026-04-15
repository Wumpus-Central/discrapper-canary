"use strict";
n.d(t, { z: () => r });
let r = {
    Modules: {
        button: {
            BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0x7fffffff;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0x7fffffff;
                },
            },
            BORDER_RADIUS_LG: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0x7fffffff;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 0x7fffffff;
                },
            },
        },
        channels: {
            NAME_LINE_HEIGHT: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case "compact":
                            return 20;
                        case "default":
                        default:
                            return 24;
                        case "cozy":
                            return 28;
                    }
                },
            },
            SPINE_INVERTED_OFFSET_TOP: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case "compact":
                            return 2;
                        case "default":
                        default:
                            return 6;
                        case "cozy":
                            return 9;
                    }
                },
            },
            SPINE_OFFSET_LEFT: {
                resolve(e) {
                    let { density: t } = e;
                    switch (t) {
                        case "compact":
                            return 20;
                        case "default":
                        default:
                            return 24;
                        case "cozy":
                            return 28;
                    }
                },
            },
        },
        chat: {
            AVATAR_SIZE: { resolve: () => 40 },
            INPUT_ICON_SIZE: { resolve: () => 20 },
            MARKUP_LINE_HEIGHT: { resolve: () => "1.375rem" },
            RESIZE_HANDLE_WIDTH: { resolve: () => 8 },
        },
        control: {
            INPUT_HEIGHT_MD: { resolve: () => 40 },
            INPUT_HEIGHT_SM: { resolve: () => 32 },
            ITEM_HEIGHT_MD: { resolve: () => 40 },
            ITEM_HEIGHT_SM: { resolve: () => 32 },
        },
        form: { INPUT_HEIGHT: { resolve: () => 44 } },
        guildbar: {
            AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 40;
                    for (let e of t)
                        if ("refresh-fast-follow-avatars" === e)
                            switch (n) {
                                case "compact":
                                default:
                                    return 40;
                                case "default":
                                case "cozy":
                                    return 44;
                            }
                    return 40;
                },
            },
            FOLDER_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t, density: n } = e;
                    if (0 === t.length) return 48;
                    for (let e of t)
                        if ("refresh-fast-follow-avatars" === e)
                            switch (n) {
                                case "compact":
                                default:
                                    return 48;
                                case "default":
                                case "cozy":
                                    return 52;
                            }
                    return 48;
                },
            },
        },
        icon: {
            SIZE_LG: { resolve: () => 32 },
            SIZE_MD: { resolve: () => 24 },
            SIZE_SM: { resolve: () => 18 },
            SIZE_XS: { resolve: () => 16 },
            SIZE_XXS: { resolve: () => 12 },
        },
        mobile: {
            CARD_DEFAULT_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 16;
                },
            },
            CHANNEL_DETAILS_NAV_BUTTONS_GAP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 0;
                    return 12;
                },
            },
            CHANNEL_DETAILS_NAV_ICON_BUTTON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "sm";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "lg";
                    return "sm";
                },
            },
            CHANNEL_DETAILS_NAV_ICON_BUTTON_VARIANT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "tertiary";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "icon-only";
                    return "tertiary";
                },
            },
            CHANNEL_ITEM_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            CHANNEL_LIST_TITLE_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "redesign/heading-18/bold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "heading-lg/semibold";
                    return "redesign/heading-18/bold";
                },
            },
            CHANNEL_NAME_CHANNEL_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 1;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 0;
                    return 1;
                },
            },
            CHANNEL_NAME_CHANNEL_ICON_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            CHAT_INPUT_ACTION_BUTTON_MARGIN: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 4;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 0;
                    return 4;
                },
            },
            CHAT_INPUT_ACTION_BUTTON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 40;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 32;
                    return 40;
                },
            },
            CHAT_INPUT_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 24;
                },
            },
            CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 8;
                },
            },
            CHAT_INPUT_EXPRESSION_OFFSET_LEFT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 6;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 6;
                },
            },
            CHAT_INPUT_EXPRESSION_OFFSET_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 6;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 10;
                    return 6;
                },
            },
            CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0;
                },
            },
            CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 0;
                },
            },
            CHAT_INPUT_FLOATING_SCRIM_GRADIENT_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 52;
                    return 0;
                },
            },
            CHAT_INPUT_FLOATING_SCRIM_OFFSET_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 24;
                    return 0;
                },
            },
            CHAT_INPUT_FLOATING_TYPING_PADDING_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 20;
                    return 0;
                },
            },
            CHAT_INPUT_ICON_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "medium";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "small20";
                    return "medium";
                },
            },
            CHAT_INPUT_PILL_PADDING: { resolve: () => 2 },
            CHAT_INPUT_SPACE_BOTTOM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 34;
                    return 0;
                },
            },
            COACHMARK_BODY_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 260;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 240;
                    return 260;
                },
            },
            COACHMARK_BUTTON_SPACING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 12;
                },
            },
            CONTROL_CHECKBOX_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 4;
                    return 8;
                },
            },
            CONTROL_CHECKBOX_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 2;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 1.2;
                    return 2;
                },
            },
            CONTROL_CHECKBOX_SIZE_DEFAULT: { resolve: () => 24 },
            CONTROL_RADIO_ICON_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 2;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 1.2;
                    return 2;
                },
            },
            CONTROL_RADIO_ICON_DOT_SIZE_DEFAULT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 10;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 10;
                },
            },
            CONTROL_RADIO_ICON_SIZE_DEFAULT: { resolve: () => 24 },
            CONTROL_SWITCH_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 32;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 28;
                    return 32;
                },
            },
            CONTROL_SWITCH_KNOB_CHECKED_OFFSET: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 28;
                    return 16;
                },
            },
            CONTROL_SWITCH_KNOB_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 20;
                    return 24;
                },
            },
            CONTROL_SWITCH_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 48;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 56;
                    return 48;
                },
            },
            EMOJI_ROW_EMOJI_CONTAINER_SIZE: { resolve: () => 48 },
            EMOJI_ROW_EMOJI_FONT_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 28;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 30;
                    return 28;
                },
            },
            EMOJI_ROW_EMOJI_LINE_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 33;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 36;
                    return 33;
                },
            },
            EMOJI_ROW_EMOJI_MIN_SPACING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            EMOJI_ROW_EMOJI_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 28;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 32;
                    return 28;
                },
            },
            GROUP_AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 72;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 64;
                    return 72;
                },
            },
            GUILD_BAR_ITEM_MARGIN: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 4;
                    for (let e of t)
                        switch (e) {
                            case "mobile-visual-refresh":
                            case "guild-item-spacing":
                                return 6;
                        }
                    return 4;
                },
            },
            GUILD_BAR_ITEM_PADDING: { resolve: () => 8 },
            GUILD_BAR_ITEM_SIZE: { resolve: () => 48 },
            GUILD_FOLDER_BACKGROUND_LEFT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            GUILD_FOLDER_BACKGROUND_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0x7fffffff;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 0x7fffffff;
                },
            },
            GUILD_FOLDER_BACKGROUND_WIDTH_OFFSET: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0;
                },
            },
            GUILD_FOLDER_COLOR_OPACITY: { resolve: () => 0.15 },
            GUILD_FOLDER_PADDING: { resolve: () => 8 },
            GUILD_FOLDER_PREVIEW_ICON_MARGIN: { resolve: () => 6 },
            GUILD_FOLDER_PREVIEW_OPACITY: { resolve: () => 0.4 },
            GUILD_ITEM_SELECTED_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 16;
                },
            },
            HEADER_TITLE_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "heading-md/bold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "heading-lg/semibold";
                    return "heading-md/bold";
                },
            },
            INPUT_FIELD_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 1;
                    return 0;
                },
            },
            INPUT_FIELD_PADDING_VERTICAL_SM_IOS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 4;
                    return 8;
                },
            },
            INPUT_FIELD_RADIUS_LG: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 16;
                },
            },
            INPUT_FIELD_RADIUS_MD: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            INPUT_FIELD_RADIUS_SM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 12;
                },
            },
            INPUT_FIELD_ROUND_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0x7fffffff;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0x7fffffff;
                },
            },
            INPUT_FIELD_TEXT_STYLE_LG: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-md/medium";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-md/normal";
                    return "text-md/medium";
                },
            },
            INPUT_FIELD_TEXT_STYLE_MD: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-sm/medium";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-md/normal";
                    return "text-sm/medium";
                },
            },
            INPUT_FIELD_TEXT_STYLE_SM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-xs/medium";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-xs/normal";
                    return "text-xs/medium";
                },
            },
            MEDIA_KEYBOARD_BAR_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0x7fffffff;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 0x7fffffff;
                },
            },
            MEDIA_KEYBOARD_BAR_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 1;
                    return 0;
                },
            },
            MEDIA_KEYBOARD_BAR_BUTTONS_MARGIN_HORIZONTAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 0;
                    return 24;
                },
            },
            MEDIA_KEYBOARD_BAR_GAP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 4;
                    return 16;
                },
            },
            MEDIA_KEYBOARD_BAR_MARGIN_HORIZONTAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 16;
                },
            },
            MEDIA_KEYBOARD_BAR_PADDING_HORIZONTAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0;
                },
            },
            MEDIA_KEYBOARD_BUTTON_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0;
                },
            },
            MEDIA_KEYBOARD_BUTTON_ICON_COLOR_ACTIVE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-default";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "icon-strong";
                    return "text-default";
                },
            },
            MEDIA_KEYBOARD_BUTTON_ICON_COLOR_DISABLED: { resolve: () => "text-muted" },
            MEDIA_KEYBOARD_BUTTON_ICON_COLOR_INACTIVE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-default";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "icon-subtle";
                    return "text-default";
                },
            },
            MEDIA_KEYBOARD_BUTTON_PADDING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 4;
                    return 0;
                },
            },
            MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_ACTIVE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-default";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-strong";
                    return "text-default";
                },
            },
            MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_DISABLED: { resolve: () => "text-muted" },
            MEDIA_KEYBOARD_BUTTON_TEXT_COLOR_INACTIVE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-default";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-subtle";
                    return "text-default";
                },
            },
            MEDIA_KEYBOARD_BUTTON_TEXT_VARIANT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-xs/semibold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-xs/medium";
                    return "text-xs/semibold";
                },
            },
            MESSAGES_HEADER_BUTTON_GAP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 8;
                },
            },
            MESSAGES_HEADER_BUTTON_LAYOUT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "row";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "row-reverse";
                    return "row";
                },
            },
            MESSAGES_HEADER_PADDING_BOTTOM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 16;
                },
            },
            MESSAGES_ITEM_CHANNEL_AVATAR_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 32;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 40;
                    return 32;
                },
            },
            MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "redesign/channel-title/semibold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "redesign/heading-18/semibold";
                    return "redesign/channel-title/semibold";
                },
            },
            MESSAGES_ITEM_HAPPENING_NOW_PADDING_BOTTOM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 8;
                },
            },
            PROMO_SHEET_GRAPHIC_MAX_WIDTH: { resolve: () => 288 },
            SEGMENTED_CONTROL_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 16;
                },
            },
            SETTINGS_PADDING_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 24;
                    return 16;
                },
            },
            SHEET_HANDLE_HEIGHT: { resolve: () => 4 },
            SHEET_HANDLE_MARGIN_BOTTOM: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 24;
                    return 12;
                },
            },
            SHEET_HANDLE_MARGIN_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 4;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 4;
                },
            },
            SHEET_HANDLE_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 32;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 36;
                    return 32;
                },
            },
            SHEET_HEADER_PADDING_HORIZONTAL: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 0;
                    return 16;
                },
            },
            TABLE_ROW_ARROW_MARGIN_END: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 0;
                },
            },
            TABLE_ROW_ARROW_MARGIN_START: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 14;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 8;
                    return 14;
                },
            },
            TABLE_ROW_ARROW_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 8;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 8;
                },
            },
            TABLE_ROW_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 16;
                },
            },
            TABLE_ROW_CONTENT_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 36;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 32;
                    return 36;
                },
            },
            TABLE_ROW_DIVIDER_PADDING: { resolve: () => 56 },
            TABLE_ROW_GROUP_HELPER_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-sm/medium";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-sm/normal";
                    return "text-sm/medium";
                },
            },
            TABLE_ROW_HEIGHT: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 60;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 56;
                    return 60;
                },
            },
            TABLE_ROW_ICON_SIZE: { resolve: () => 32 },
            TABLE_ROW_PADDING: { resolve: () => 12 },
            TAB_BAR_UNREAD_BADGE_SIZE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 22;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 22;
                },
            },
            TAB_LABEL_MARGIN_TOP: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return -6;
                    for (let e of t) if ("mobile-visual-refresh" === e) return -4;
                    return -6;
                },
            },
            TAB_LABEL_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-xxs/semibold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-xs/medium";
                    return "text-xxs/semibold";
                },
            },
            USER_PROFILE_ABOUT_ME_HEADING_TEXT_STYLE: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return "text-sm/semibold";
                    for (let e of t) if ("mobile-visual-refresh" === e) return "text-md/medium";
                    return "text-sm/semibold";
                },
            },
            USER_ROW_LABEL_LINE_HEIGHT_ANDROID: { resolve: () => 16 },
            USER_ROW_LABEL_LINE_HEIGHT_IOS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 22;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 20;
                    return 22;
                },
            },
            VOICE_CHANNEL_USER_LIMIT_BORDER_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 1;
                    return 0;
                },
            },
            VOICE_PANEL_CONTROLS_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 32;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 32;
                },
            },
            VOICE_PANEL_CONTROLS_PADDING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 16;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 4;
                    return 16;
                },
            },
            VOICE_PANEL_DISCONNECT_BUTTON_MIN_WIDTH: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 0;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 64;
                    return 0;
                },
            },
            VOICE_PANEL_GUTTER: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 12;
                },
            },
            VOICE_PANEL_PADDING: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 12;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 16;
                    return 12;
                },
            },
            VOICE_TILE_BORDER_RADIUS: {
                resolve(e) {
                    let { enabledExperiments: t } = e;
                    if (0 === t.length) return 24;
                    for (let e of t) if ("mobile-visual-refresh" === e) return 12;
                    return 24;
                },
            },
        },
        modal: {
            HORIZONTAL_PADDING: { resolve: () => 24 },
            VERTICAL_PADDING: { resolve: () => 16 },
            WIDTH_LARGE: { resolve: () => 800 },
            WIDTH_MEDIUM: { resolve: () => 602 },
            WIDTH_SMALL: { resolve: () => 442 },
        },
        select: { MAX_WIDTH: { resolve: () => 248 }, OPTION_HEIGHT: { resolve: () => 40 } },
    },
};
