"use strict";
n.d(t, {
    Lr: () => A,
    We: () => S,
    ZV: () => R,
    c7: () => g,
    fw: () => v,
    j2: () => N,
    kC: () => T,
    p4: () => I,
    so: () => C,
    wT: () => y,
    zv: () => m,
});
var i = n(835245),
    r = n(317097),
    s = n(155718),
    a = n(626584),
    o = n(337591),
    l = n(731068),
    u = n(486020),
    c = n(403362),
    d = n(935208),
    _ = n(489414),
    h = n(532294),
    f = n(375708);
let p = new a.A("InteractionComponentUtils"),
    E = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? u.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    }),
    m = (e, t, n) => {
        let i =
            e?.data.interactionType === s.G4.MESSAGE_COMPONENT && e?.state === o.m.FAILED ? e.data.componentId : null;
        if (
            null !=
            (null != i
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
                  })(n, i)
                : null)
        )
            return (
                t?.interactionError ?? (e?.errorCode === 429 ? f.intl.string(f.t.fitPBS) : f.intl.string(f.t.VCsUJu))
            );
    };
function g(e) {
    return e.placeholder ?? f.intl.string(f.t.Otr6W2);
}
function A(e, t) {
    let { minValues: n, required: i } = e;
    return "modal" === t ? !i : 0 === n;
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
function S(e) {
    for (let t of I(e).values())
        if (t.type === s.I5.MEDIA_GALLERY) {
            let e = t.items[0];
            if (null == e) continue;
            let n = (0, l.FE)(e.media);
            if ("INVALID" !== n) return { ...e.media, type: n, alt: e.description };
        } else if (t.type === s.I5.THUMBNAIL) {
            let e = (0, l.FE)(t.media);
            if ("INVALID" !== e) return { ...t.media, type: e, alt: t.description };
        }
    return null;
}
function y(e, t) {
    return (function e(n) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let r of n) {
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
                        return p.warn("getComponentChildren: Unknown component type", e.type), [];
                }
            })(r);
            if (n.some((e) => e.id === t.id)) return [r, ...i];
            let a = e(n, [r, ...i]);
            if (null != a) return a;
        }
        return null;
    })(e);
}
function C(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, i.A)() });
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
function v(e, t, n, i) {
    if (null != n)
        if (!(e > 1)) return f.intl.format(f.t.QLrHJG, { maxValues: t, types: n, maxSize: i });
        else if (e === t) return f.intl.format(f.t.Xp4xMV, { minValues: e, types: n, maxSize: i });
        else return f.intl.format(f.t["05AyNA"], { minValues: e, maxValues: t, types: n, maxSize: i });
    return e > 1
        ? e === t
            ? f.intl.format(f.t.SAr31z, { minValues: e, maxSize: i })
            : f.intl.format(f.t["ZG+3Ck"], { minValues: e, maxValues: t, maxSize: i })
        : f.intl.format(f.t.tyxwW1, { maxValues: t, maxSize: i });
}
function R(e) {
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
                function i(t, i) {
                    let r = e(t, [...n, i]);
                    return null == r ? null : r;
                }
                switch (t.type) {
                    case s.I5.ACTION_ROW: {
                        let e = t.components.map((e, t) => i(e, t)).filter(c.Vq);
                        return { type: s.I5.ACTION_ROW, id: O(n), components: e };
                    }
                    case s.I5.BUTTON: {
                        let e = null != t.emoji ? E(t.emoji, !1) : void 0;
                        return {
                            type: s.I5.BUTTON,
                            id: O(n),
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
                            id: O(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            options: t.options.map((e) => ({
                                type: _.iw.STRING,
                                label: e.label,
                                value: e.value,
                                default: e.default,
                                description: e.description,
                                emoji: null != e.emoji ? E(e.emoji, !1) : void 0,
                            })),
                            placeholder: t.placeholder,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                        };
                    case s.I5.TEXT_INPUT:
                        return {
                            type: t.type,
                            id: O(n),
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
                            id: O(n),
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
                            id: O(n),
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
                            id: O(n),
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
                            id: O(n),
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
                        let e = t.components.map((e, t) => i(e, t)).filter(c.Vq),
                            r = i(t.accessory, e.length);
                        if (0 === e.length || null == r) return null;
                        return { type: s.I5.SECTION, id: O(n), components: e, accessory: r };
                    }
                    case s.I5.TEXT_DISPLAY:
                        return { type: s.I5.TEXT_DISPLAY, id: O(n), content: t.content };
                    case s.I5.THUMBNAIL:
                        return {
                            type: s.I5.THUMBNAIL,
                            id: O(n),
                            media: (0, l.Uv)(t.media),
                            description: t.description,
                            spoiler: t.spoiler,
                        };
                    case s.I5.MEDIA_GALLERY:
                        return {
                            type: s.I5.MEDIA_GALLERY,
                            id: O(n),
                            items: t.items.map((e) => ({
                                media: (0, l.Uv)(e.media),
                                description: e.description,
                                spoiler: e.spoiler,
                            })),
                        };
                    case s.I5.FILE:
                        return {
                            type: s.I5.FILE,
                            id: O(n),
                            file: (0, l.Uv)(t.file),
                            name: t.name,
                            size: t.size,
                            spoiler: t.spoiler,
                        };
                    case s.I5.SEPARATOR:
                        return {
                            type: s.I5.SEPARATOR,
                            id: O(n),
                            divider: t.divider ?? !0,
                            spacing: t.spacing ?? s.C8.SMALL,
                        };
                    case s.I5.CONTENT_INVENTORY_ENTRY:
                        if (null == t.content_inventory_entry) return null;
                        return {
                            type: s.I5.CONTENT_INVENTORY_ENTRY,
                            id: O(n),
                            contentInventoryEntry: t.content_inventory_entry,
                        };
                    case s.I5.CONTAINER: {
                        let e = t.components.map((e, t) => i(e, t)).filter(c.Vq);
                        return {
                            type: s.I5.CONTAINER,
                            id: O(n),
                            accentColor: null != t.accent_color ? (0, r.$k)(t.accent_color, !0) : void 0,
                            spoiler: t.spoiler,
                            components: e,
                        };
                    }
                    case s.I5.LABEL: {
                        let e = i(t.component, 0);
                        if (null == e) return null;
                        return { type: s.I5.LABEL, id: O(n), label: t.label, description: t.description, component: e };
                    }
                    case s.I5.FILE_UPLOAD:
                        return {
                            type: t.type,
                            id: O(n),
                            customId: t.custom_id,
                            disabled: t.disabled,
                            required: t.required ?? !1,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            fileTypes: t.file_types,
                        };
                    case s.I5.CHECKPOINT_CARD:
                        var a, o;
                        let u;
                        return (
                            (a = t),
                            (o = n),
                            (u = a.checkpoint_data).version === h.w.V2025
                                ? {
                                      type: a.type,
                                      id: O(o),
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
                                                        emojiId: d.default.isProbablyAValidSnowflake(
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
                            id: O(n),
                            customId: t.custom_id,
                            options: t.options,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX_GROUP:
                        return {
                            type: t.type,
                            id: O(n),
                            customId: t.custom_id,
                            options: t.options,
                            minValues: t.min_values,
                            maxValues: t.max_values,
                            required: t.required ?? !1,
                        };
                    case s.I5.CHECKBOX:
                        return { type: t.type, id: O(n), customId: t.custom_id, default: t.default };
                    default:
                        return p.warn("transformComponent: Unknown component type", t.type), null;
                }
            })(e, [t]),
        )
        .filter((e) => null != e);
}
function O(e) {
    return (0, _.X1)(e.join(","));
}
