"use strict";
n.d(t, {
    Lr: () => A,
    ZV: () => O,
    c7: () => g,
    j2: () => N,
    kC: () => T,
    p4: () => I,
    so: () => y,
    wT: () => S,
    zv: () => m,
});
var r = n(835245),
    i = n(317097),
    s = n(155718),
    a = n(626584),
    o = n(337591),
    l = n(731068),
    u = n(486020),
    d = n(403362),
    c = n(661191),
    _ = n(489414),
    f = n(532294),
    E = n(985018);
let h = new a.A("InteractionComponentUtils"),
    p = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? u.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    }),
    m = (e, t, n) => {
        let r =
            e?.data.interactionType === s.G4.MESSAGE_COMPONENT && e?.state === o.m.FAILED ? e.data.componentId : null;
        if (
            null !=
            (null != r
                ? (function (e, t) {
                      switch (e.type) {
                          case s.I5.ACTION_ROW:
                              return e.components.find((e) => e.id === t) ?? null;
                          case s.I5.SECTION:
                              if (e.accessory.id === t) return e.accessory;
                              return e.components.find((e) => e.id === t) ?? null;
                          case s.I5.CONTAINER:
                              return e.components.find((e) => e.id === t) ?? null;
                      }
                  })(n, r)
                : null)
        )
            return (
                t?.interactionError ?? (e?.errorCode === 429 ? E.intl.string(E.t.fitPBS) : E.intl.string(E.t.VCsUJu))
            );
    };
function g(e) {
    return e.placeholder ?? E.intl.string(E.t.Otr6W2);
}
function A(e, t) {
    let { minValues: n, required: r } = e;
    return "modal" === t ? !r : 0 === n;
}
function I(e) {
    let t = new Map();
    for (let n of e)
        !(function e(t, n) {
            switch ((t.set(n.id, n), n.type)) {
                case s.I5.ACTION_ROW:
                    n.components.forEach((n) => e(t, n));
                    break;
                case s.I5.SECTION:
                    n.components.forEach((n) => e(t, n)), e(t, n.accessory);
                    break;
                case s.I5.CONTAINER:
                    n.components.forEach((n) => e(t, n));
            }
        })(t, n);
    return t;
}
function T(e) {
    let t = Array.from(I(e).values())
        .filter((e) => e.type === s.I5.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function S(e, t) {
    return (function e(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let i of n) {
            let n = (function (e) {
                switch (e.type) {
                    case s.I5.ACTION_ROW:
                        return e.components;
                    case s.I5.SECTION:
                        return [...e.components, e.accessory];
                    case s.I5.CONTAINER:
                        return e.components;
                    case s.I5.LABEL:
                        return [e.component];
                    case s.I5.BUTTON:
                    case s.I5.STRING_SELECT:
                    case s.I5.TEXT_INPUT:
                    case s.I5.USER_SELECT:
                    case s.I5.ROLE_SELECT:
                    case s.I5.MENTIONABLE_SELECT:
                    case s.I5.CHANNEL_SELECT:
                    case s.I5.TEXT_DISPLAY:
                    case s.I5.THUMBNAIL:
                    case s.I5.MEDIA_GALLERY:
                    case s.I5.FILE:
                    case s.I5.SEPARATOR:
                    case s.I5.CONTENT_INVENTORY_ENTRY:
                    case s.I5.FILE_UPLOAD:
                    case s.I5.CHECKPOINT_CARD:
                    case s.I5.RADIO_GROUP:
                    case s.I5.CHECKBOX_GROUP:
                    case s.I5.CHECKBOX:
                        return [];
                    default:
                        return h.warn("getComponentChildren: Unknown component type", e.type), [];
                }
            })(i);
            if (n.some((e) => e.id === t.id)) return [i, ...r];
            let a = e(n, [i, ...r]);
            if (null != a) return a;
        }
        return null;
    })(e);
}
function y(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, r.A)() });
}
function N(e) {
    try {
        let t = JSON.parse(e);
        if (t?.type !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId)
            return null;
        return t;
    } catch {
        return null;
    }
}
function O(e) {
    return e
        .map((e, t) =>
            (function e(t, n) {
                if (
                    !((e) => {
                        switch (e) {
                            case s.I5.ACTION_ROW:
                            case s.I5.BUTTON:
                            case s.I5.STRING_SELECT:
                            case s.I5.TEXT_INPUT:
                            case s.I5.USER_SELECT:
                            case s.I5.ROLE_SELECT:
                            case s.I5.MENTIONABLE_SELECT:
                            case s.I5.CHANNEL_SELECT:
                            case s.I5.SECTION:
                            case s.I5.TEXT_DISPLAY:
                            case s.I5.THUMBNAIL:
                            case s.I5.MEDIA_GALLERY:
                            case s.I5.FILE:
                            case s.I5.SEPARATOR:
                            case s.I5.CONTAINER:
                            case s.I5.LABEL:
                            case s.I5.FILE_UPLOAD:
                            case s.I5.CHECKPOINT_CARD:
                            case s.I5.RADIO_GROUP:
                            case s.I5.CHECKBOX_GROUP:
                            case s.I5.CHECKBOX:
                            case s.I5.CONTENT_INVENTORY_ENTRY:
                                return !0;
                            case s.I5.UNKNOWN:
                            default:
                                return !1;
                        }
                    })(t.type)
                )
                    return null;
                function r(t, r) {
                    let i = e(t, [...n, r]);
                    return null == i ? null : i;
                }
                switch (t.type) {
                    case s.I5.ACTION_ROW: {
                        let e = t.components.map((e, t) => r(e, t)).filter(d.Vq);
                        return { type: s.I5.ACTION_ROW, id: R(n), components: e };
                    }
                    case s.I5.BUTTON: {
                        let e = null != t.emoji ? p(t.emoji, !1) : void 0;
                        return {
                            type: s.I5.BUTTON,
                            id: R(n),
                            customId: t.custom_id,
                            style: t.style,
                            disabled: t.disabled,
                            url: t.url,
                            label: t.label,
                            emoji: e,
                            skuId: t.sku_id,
                        };
                    }
                    case s.I5.STRING_SELECT:
                        return {
                            type: s.I5.STRING_SELECT,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            options: t.options.map((e) => ({
                                type: _.iw.STRING,
                                label: e.label,
                                value: e.value,
                                default: e.default,
                                description: e.description,
                                emoji: null != e.emoji ? p(e.emoji, !1) : void 0,
                            })),
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                        };
                    case s.I5.TEXT_INPUT:
                        return {
                            type: t.type,
                            id: R(n),
                            style: t.style,
                            customId: t.custom_id,
                            label: t.label,
                            value: t.value,
                            placeholder: t.placeholder,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            minLength: t.min_length,
                            maxLength: t.max_length,
                        };
                    case s.I5.USER_SELECT:
                        return {
                            type: s.I5.USER_SELECT,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.ROLE_SELECT:
                        return {
                            type: s.I5.ROLE_SELECT,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.MENTIONABLE_SELECT:
                        return {
                            type: s.I5.MENTIONABLE_SELECT,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            defaultValues: t.default_values,
                        };
                    case s.I5.CHANNEL_SELECT:
                        return {
                            type: s.I5.CHANNEL_SELECT,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            channelTypes: t.channel_types,
                            defaultValues: t.default_values,
                        };
                    case s.I5.SECTION: {
                        let e = t.components.map((e, t) => r(e, t)).filter(d.Vq),
                            i = r(t.accessory, e.length);
                        if (0 === e.length || null == i) return null;
                        return { type: s.I5.SECTION, id: R(n), components: e, accessory: i };
                    }
                    case s.I5.TEXT_DISPLAY:
                        return { type: s.I5.TEXT_DISPLAY, id: R(n), content: t.content };
                    case s.I5.THUMBNAIL:
                        return {
                            type: s.I5.THUMBNAIL,
                            id: R(n),
                            media: (0, l.Uv)(t.media),
                            description: t.description,
                            spoiler: t.spoiler,
                        };
                    case s.I5.MEDIA_GALLERY:
                        return {
                            type: s.I5.MEDIA_GALLERY,
                            id: R(n),
                            items: t.items.map((e) => ({
                                media: (0, l.Uv)(e.media),
                                description: e.description,
                                spoiler: e.spoiler,
                            })),
                        };
                    case s.I5.FILE:
                        return {
                            type: s.I5.FILE,
                            id: R(n),
                            file: (0, l.Uv)(t.file),
                            name: t.name,
                            size: t.size,
                            spoiler: t.spoiler,
                        };
                    case s.I5.SEPARATOR:
                        return {
                            type: s.I5.SEPARATOR,
                            id: R(n),
                            divider: t.divider ?? !0,
                            spacing: t.spacing ?? s.C8.SMALL,
                        };
                    case s.I5.CONTENT_INVENTORY_ENTRY:
                        if (null == t.content_inventory_entry) return null;
                        return {
                            type: s.I5.CONTENT_INVENTORY_ENTRY,
                            id: R(n),
                            contentInventoryEntry: t.content_inventory_entry,
                        };
                    case s.I5.CONTAINER: {
                        let e = t.components.map((e, t) => r(e, t)).filter(d.Vq);
                        return {
                            type: s.I5.CONTAINER,
                            id: R(n),
                            accentColor: null != t.accent_color ? (0, i.$k)(t.accent_color, !0) : void 0,
                            spoiler: t.spoiler,
                            components: e,
                        };
                    }
                    case s.I5.LABEL: {
                        let e = r(t.component, 0);
                        if (null == e) return null;
                        return { type: s.I5.LABEL, id: R(n), label: t.label, description: t.description, component: e };
                    }
                    case s.I5.FILE_UPLOAD:
                        return {
                            type: t.type,
                            id: R(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                        };
                    case s.I5.CHECKPOINT_CARD:
                        var a, o;
                        let u;
                        return (
                            (a = t),
                            (o = n),
                            (u = a.checkpoint_data).version === f.w.V2025
                                ? {
                                      type: a.type,
                                      id: R(o),
                                      checkpointData: {
                                          version: u.version,
                                          cardId: u.card_id,
                                          powerLevel: u.power_level,
                                          powerLevelPercentile: u.power_level_percentile,
                                          numMessagesSent: u.num_messages_sent,
                                          totalVoiceMinutes: u.total_voice_minutes,
                                          numEmojisSent: u.num_emojis_sent,
                                          topGuild:
                                              null != u.top_guild
                                                  ? {
                                                        guildId: u.top_guild.guild_id,
                                                        guildName: u.top_guild.guild_name,
                                                        guildIcon: u.top_guild.guild_icon,
                                                    }
                                                  : void 0,
                                          topEmoji:
                                              null != u.top_emoji
                                                  ? {
                                                        emojiId: c.default.isProbablyAValidSnowflake(
                                                            u.top_emoji.emoji_id,
                                                        )
                                                            ? u.top_emoji.emoji_id
                                                            : void 0,
                                                        emojiName: u.top_emoji?.emoji_name,
                                                    }
                                                  : void 0,
                                          topGame:
                                              null != u.top_game
                                                  ? {
                                                        applicationId: u.top_game.application_id,
                                                        applicationName: u.top_game.application_name,
                                                        applicationImageId: u.top_game.application_image_id,
                                                    }
                                                  : void 0,
                                      },
                                  }
                                : null
                        );
                    case s.I5.RADIO_GROUP:
                        return {
                            type: t.type,
                            id: R(n),
                            customId: t.custom_id,
                            options: t.options,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX_GROUP:
                        return {
                            type: t.type,
                            id: R(n),
                            customId: t.custom_id,
                            options: t.options,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX:
                        return { type: t.type, id: R(n), customId: t.custom_id, default: t.default };
                    default:
                        return h.warn("transformComponent: Unknown component type", t.type), null;
                }
            })(e, [t]),
        )
        .filter((e) => null != e);
}
function R(e) {
    return (0, _.X1)(e.join(","));
}
