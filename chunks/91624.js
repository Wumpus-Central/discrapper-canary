n.d(t, { Ay: () => b, Nr: () => v, R3: () => _ }), n(938796);
var s = n(477900),
    i = n(582128),
    l = n(665260),
    a = n(17928),
    o = n(148494),
    r = n(155718),
    c = n(355622),
    u = n(138617),
    d = n(280450),
    h = n(580745),
    p = n(71393),
    g = n(576705),
    m = n(625494),
    A = n(806150),
    E = n(145530),
    f = n(438729),
    S = n(205120),
    y = n(652215);
n(294920);
var T = n(364932);
function _(e) {
    let { value: t, channel: n, message: s } = e;
    return (0, A.i)({
        type: c.oU.EDIT,
        content: t,
        channel: n,
        hasStickers: s.stickerItems.length > 0 || s.stickers.length > 0,
        hasAttachments: s.attachments.length > 0,
        hasComponents: s.components.length > 0,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function C(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        m = t.getGuildId(),
        A = (0, a.bG)([p.A], () => p.A.getGuild(m), [m]),
        f = t.type === y.rbe.GUILD_ANNOUNCEMENT,
        C = null != A && A.features.has(y.GuildFeatures.NEWS),
        b = f && C,
        {
            editingMessage: I,
            editingTextValue: M,
            editingRichValue: N,
        } = (0, a.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        R = (0, a.bG)([d.default], () => d.default.getId()),
        P = i.useCallback(
            (e, s, i) => {
                let { content: a } = i,
                    c = g.A.can(y.xBc.MANAGE_MESSAGES, t),
                    u = null != I && null != I.author ? I.author.id : null,
                    d = b && (u === R || c),
                    h = { content: a, components: void 0 };
                if (n.hasFlag(y.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === r.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== r.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: r.I5.TEXT_DISPLAY, content: a, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    d && null != I && (0, l.Lt)(I.flags, y.pr7.CROSSPOSTED)
                        ? E.A.confirmEdit(e, s, h)
                        : o.A.editMessage(e, s, h),
                    Promise.resolve()
                );
            },
            [I, b, R, t, n],
        ),
        k = i.useCallback((e) => (0, i.createElement)(v, { ...e, className: T.gM, key: u }), [u]);
    return null != M && null != N
        ? (0, s.jsx)(S.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: M,
              richValue: N,
              onCancel: o.A.endEditMessage,
              onChange: o.A.updateEditMessage,
              onConfirmDelete: E.A.confirmDelete,
              saveMessage: P,
              validateEdit: _,
              children: k,
          })
        : null;
}
function v(e) {
    let {
            textValue: t,
            richValue: n,
            message: l,
            channel: a,
            onChange: o,
            onSubmit: r,
            onKeyDown: d,
            renderLeftAccessories: h,
        } = e,
        [p, g] = i.useState(!0),
        A = i.useCallback(() => g(!0), []),
        E = i.useCallback(() => g(!1), []);
    return (
        i.useEffect(
            () => (
                m._.subscribe(y.jej.TEXTAREA_FOCUS, A),
                m._.subscribe(y.jej.TEXTAREA_BLUR, E),
                () => {
                    m._.unsubscribe(y.jej.TEXTAREA_FOCUS, A), m._.unsubscribe(y.jej.TEXTAREA_BLUR, E);
                }
            ),
            [A, E],
        ),
        (0, s.jsx)(
            u.Ay,
            {
                className: T.gM,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.oU.EDIT,
                onChange: o,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return r(t);
                },
                onKeyDown: d,
                focused: p,
                onFocus: A,
                onBlur: E,
                renderLeftAccessories: h,
            },
            l.id,
        )
    );
}
function b(e, t, n) {
    let { message: i, channel: l, compact: a } = e;
    return n
        ? (0, s.jsx)(C, { channel: l, message: i })
        : (0, s.jsx)(f.Ay, { message: i, content: t, compact: a ?? !1 });
}
