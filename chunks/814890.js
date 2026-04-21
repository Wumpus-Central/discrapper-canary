"use strict";
n.d(t, {
    Lr: () => I,
    ZV: () => D,
    c7: () => A,
    j2: () => b,
    kC: () => N,
    p4: () => S,
    so: () => O,
    wT: () => C,
    zv: () => g,
});
var r = n(835245),
    i = n(317097),
    s = n(155718),
    a = n(626584),
    o = n(337591),
    l = n(731068),
    u = n(486020),
    c = n(403362),
    d = n(661191),
    _ = n(489414),
    f = n(532294),
    p = n(985018);
let h = new a.A("InteractionComponentUtils"),
    m = (e, t) => ({
        id: e.id,
        name: e.name,
        animated: e.animated,
        src: t && null != e.id ? u.Ay.getEmojiURL({ id: e.id, animated: e.animated || !1, size: 48 }) : void 0,
    }),
    E = (e) => (e?.errorCode === 429 ? p.intl.string(p.t.fitPBS) : p.intl.string(p.t.VCsUJu)),
    g = (e, t, n) => {
        let r =
            e?.data.interactionType === s.G4.MESSAGE_COMPONENT && e?.state === o.m.FAILED ? e.data.componentId : null;
        if (null != (null != r ? v(n, r) : null)) return t?.interactionError ?? E(e);
    };
function A(e) {
    return e.placeholder ?? p.intl.string(p.t.Otr6W2);
}
function I(e, t) {
    let { minValues: n, required: r } = e;
    return "modal" === t ? !r : 0 === n;
}
let T = (e) => {
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
};
function S(e) {
    let t = new Map();
    for (let n of e) y(t, n);
    return t;
}
function y(e, t) {
    switch ((e.set(t.id, t), t.type)) {
        case s.I5.ACTION_ROW:
            t.components.forEach((t) => y(e, t));
            break;
        case s.I5.SECTION:
            t.components.forEach((t) => y(e, t)), y(e, t.accessory);
            break;
        case s.I5.CONTAINER:
            t.components.forEach((t) => y(e, t));
    }
}
function v(e, t) {
    switch (e.type) {
        case s.I5.ACTION_ROW:
            return e.components.find((e) => e.id === t) ?? null;
        case s.I5.SECTION:
            if (e.accessory.id === t) return e.accessory;
            return e.components.find((e) => e.id === t) ?? null;
        case s.I5.CONTAINER:
            return e.components.find((e) => e.id === t) ?? null;
    }
}
function N(e) {
    let t = Array.from(S(e).values())
        .filter((e) => e.type === s.I5.TEXT_DISPLAY)
        .map((e) => e.content)
        .join("\n");
    return "" !== t ? t : null;
}
function C(e, t) {
    function n(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let i of e) {
            let e = R(i);
            if (e.some((e) => e.id === t.id)) return [i, ...r];
            let s = n(e, [i, ...r]);
            if (null != s) return s;
        }
        return null;
    }
    return n(e);
}
function R(e) {
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
}
function O(e) {
    return JSON.stringify({ type: "component-upload", containerId: e, uniqueId: crypto.randomUUID?.() ?? (0, r.A)() });
}
function b(e) {
    try {
        let t = JSON.parse(e);
        if (t?.type !== "component-upload" || "string" != typeof t.containerId || "string" != typeof t.uniqueId)
            return null;
        return t;
    } catch {
        return null;
    }
}
function D(e) {
    return e.map((e, t) => L(e, [t])).filter((e) => null != e);
}
function L(e, t) {
    if (!T(e.type)) return null;
    function n(e, n) {
        let r = L(e, [...t, n]);
        return null == r ? null : r;
    }
    let r = !1;
    switch (e.type) {
        case s.I5.ACTION_ROW: {
            let r = e.components.map((e, t) => n(e, t)).filter(c.Vq);
            return { type: s.I5.ACTION_ROW, id: w(t), components: r };
        }
        case s.I5.BUTTON: {
            let n = null != e.emoji ? m(e.emoji, r) : void 0;
            return {
                type: s.I5.BUTTON,
                id: w(t),
                customId: e.custom_id,
                style: e.style,
                disabled: e.disabled,
                url: e.url,
                label: e.label,
                emoji: n,
                skuId: e.sku_id,
            };
        }
        case s.I5.STRING_SELECT:
            return {
                type: s.I5.STRING_SELECT,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                options: e.options.map((e) => ({
                    type: _.iw.STRING,
                    label: e.label,
                    value: e.value,
                    default: e.default,
                    description: e.description,
                    emoji: null != e.emoji ? m(e.emoji, r) : void 0,
                })),
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case s.I5.TEXT_INPUT:
            return {
                type: e.type,
                id: w(t),
                style: e.style,
                customId: e.custom_id,
                label: e.label,
                value: e.value,
                placeholder: e.placeholder,
                disabled: e.disabled,
                required: e.required ?? !1,
                minLength: e.min_length,
                maxLength: e.max_length,
            };
        case s.I5.USER_SELECT:
            return {
                type: s.I5.USER_SELECT,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case s.I5.ROLE_SELECT:
            return {
                type: s.I5.ROLE_SELECT,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case s.I5.MENTIONABLE_SELECT:
            return {
                type: s.I5.MENTIONABLE_SELECT,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                defaultValues: e.default_values,
            };
        case s.I5.CHANNEL_SELECT:
            return {
                type: s.I5.CHANNEL_SELECT,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                placeholder: e.placeholder,
                minValues: e.min_values,
                maxValues: e.max_values,
                channelTypes: e.channel_types,
                defaultValues: e.default_values,
            };
        case s.I5.SECTION: {
            let r = e.components.map((e, t) => n(e, t)).filter(c.Vq),
                i = n(e.accessory, r.length);
            if (0 === r.length || null == i) return null;
            return { type: s.I5.SECTION, id: w(t), components: r, accessory: i };
        }
        case s.I5.TEXT_DISPLAY:
            return { type: s.I5.TEXT_DISPLAY, id: w(t), content: e.content };
        case s.I5.THUMBNAIL:
            return {
                type: s.I5.THUMBNAIL,
                id: w(t),
                media: (0, l.Uv)(e.media),
                description: e.description,
                spoiler: e.spoiler,
            };
        case s.I5.MEDIA_GALLERY:
            return {
                type: s.I5.MEDIA_GALLERY,
                id: w(t),
                items: e.items.map((e) => ({
                    media: (0, l.Uv)(e.media),
                    description: e.description,
                    spoiler: e.spoiler,
                })),
            };
        case s.I5.FILE:
            return {
                type: s.I5.FILE,
                id: w(t),
                file: (0, l.Uv)(e.file),
                name: e.name,
                size: e.size,
                spoiler: e.spoiler,
            };
        case s.I5.SEPARATOR:
            return { type: s.I5.SEPARATOR, id: w(t), divider: e.divider ?? !0, spacing: e.spacing ?? s.C8.SMALL };
        case s.I5.CONTENT_INVENTORY_ENTRY:
            if (null == e.content_inventory_entry) return null;
            return { type: s.I5.CONTENT_INVENTORY_ENTRY, id: w(t), contentInventoryEntry: e.content_inventory_entry };
        case s.I5.CONTAINER: {
            let r = e.components.map((e, t) => n(e, t)).filter(c.Vq);
            return {
                type: s.I5.CONTAINER,
                id: w(t),
                accentColor: null != e.accent_color ? (0, i.$k)(e.accent_color, !0) : void 0,
                spoiler: e.spoiler,
                components: r,
            };
        }
        case s.I5.LABEL: {
            let r = n(e.component, 0);
            if (null == r) return null;
            return { type: s.I5.LABEL, id: w(t), label: e.label, description: e.description, component: r };
        }
        case s.I5.FILE_UPLOAD:
            return {
                type: e.type,
                id: w(t),
                customId: e.custom_id,
                disabled: e.disabled,
                required: e.required ?? !1,
                minValues: e.min_values,
                maxValues: e.max_values,
            };
        case s.I5.CHECKPOINT_CARD:
            return M(e, t);
        case s.I5.RADIO_GROUP:
            return { type: e.type, id: w(t), customId: e.custom_id, options: e.options, required: e.required ?? !1 };
        case s.I5.CHECKBOX_GROUP:
            return {
                type: e.type,
                id: w(t),
                customId: e.custom_id,
                options: e.options,
                minValues: e.min_values,
                maxValues: e.max_values,
                required: e.required ?? !1,
            };
        case s.I5.CHECKBOX:
            return { type: e.type, id: w(t), customId: e.custom_id, default: e.default };
        default:
            return h.warn("transformComponent: Unknown component type", e.type), null;
    }
}
function w(e) {
    return (0, _.X1)(e.join(","));
}
function M(e, t) {
    let n = e.checkpoint_data;
    return n.version === f.w.V2025
        ? {
              type: e.type,
              id: w(t),
              checkpointData: {
                  version: n.version,
                  cardId: n.card_id,
                  powerLevel: n.power_level,
                  powerLevelPercentile: n.power_level_percentile,
                  numMessagesSent: n.num_messages_sent,
                  totalVoiceMinutes: n.total_voice_minutes,
                  numEmojisSent: n.num_emojis_sent,
                  topGuild:
                      null != n.top_guild
                          ? {
                                guildId: n.top_guild.guild_id,
                                guildName: n.top_guild.guild_name,
                                guildIcon: n.top_guild.guild_icon,
                            }
                          : void 0,
                  topEmoji:
                      null != n.top_emoji
                          ? {
                                emojiId: d.default.isProbablyAValidSnowflake(n.top_emoji.emoji_id)
                                    ? n.top_emoji.emoji_id
                                    : void 0,
                                emojiName: n.top_emoji?.emoji_name,
                            }
                          : void 0,
                  topGame:
                      null != n.top_game
                          ? {
                                applicationId: n.top_game.application_id,
                                applicationName: n.top_game.application_name,
                                applicationImageId: n.top_game.application_image_id,
                            }
                          : void 0,
              },
          }
        : null;
}
