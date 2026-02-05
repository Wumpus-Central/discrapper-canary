n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    a = n(665260),
    s = n(311907),
    r = n(843472),
    o = n(155718),
    c = n(355622),
    d = n(133343),
    u = n(961350),
    h = n(580745),
    m = n(71393),
    A = n(576705),
    p = n(203982),
    g = n(460350),
    f = n(145530),
    _ = n(291812),
    E = n(205120),
    C = n(652215);
n(294920);
var x = n(119907);
function S(e) {
    let { value: t, channel: n } = e;
    return (0, g.i)({ type: c.oU.EDIT, content: t, channel: n, restrictMentions: !1, respectCooldown: !1 });
}
function T(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: d } = n,
        p = t.getGuildId(),
        g = (0, s.bG)([m.A], () => m.A.getGuild(p), [p]),
        _ = t.type === C.rbe.GUILD_ANNOUNCEMENT,
        T = null != g && g.features.has(C.GuildFeatures.NEWS),
        N = _ && T,
        {
            editingMessage: v,
            editingTextValue: y,
            editingRichValue: b,
        } = (0, s.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        R = (0, s.bG)([u.default], () => u.default.getId()),
        j = l.useCallback(
            (e, i, l) => {
                let { content: s } = l,
                    c = A.A.can(C.xBc.MANAGE_MESSAGES, t),
                    d = null != v && null != v.author ? v.author.id : null,
                    u = N && (d === R || c),
                    h = { content: s, components: void 0 };
                if (n.hasFlag(C.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: o.I5.TEXT_DISPLAY, content: s, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    u && null != v && (0, a.Lt)(v.flags, C.pr7.CROSSPOSTED)
                        ? f.A.confirmEdit(e, i, h)
                        : r.A.editMessage(e, i, h),
                    Promise.resolve()
                );
            },
            [v, N, R, t, n],
        ),
        M = l.useCallback((e) => (0, l.createElement)(I, { ...e, className: x.gM, key: d }), [d]);
    return null != y && null != b
        ? (0, i.jsx)(E.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: y,
              richValue: b,
              onCancel: r.A.endEditMessage,
              onChange: r.A.updateEditMessage,
              onConfirmDelete: f.A.confirmDelete,
              saveMessage: j,
              validateEdit: S,
              children: M,
          })
        : null;
}
function I(e) {
    let {
            textValue: t,
            richValue: n,
            message: a,
            channel: s,
            onChange: r,
            onSubmit: o,
            onKeyDown: u,
            renderLeftAccessories: h,
        } = e,
        [m, A] = l.useState(!0),
        g = l.useCallback(() => A(!0), []),
        f = l.useCallback(() => A(!1), []);
    return (
        l.useEffect(
            () => (
                p._.subscribe(C.jej.TEXTAREA_FOCUS, g),
                p._.subscribe(C.jej.TEXTAREA_BLUR, f),
                () => {
                    p._.unsubscribe(C.jej.TEXTAREA_FOCUS, g), p._.unsubscribe(C.jej.TEXTAREA_BLUR, f);
                }
            ),
            [g, f],
        ),
        (0, i.jsx)(
            d.Ay,
            {
                className: x.gM,
                textValue: t,
                richValue: n,
                channel: s,
                type: c.oU.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: u,
                focused: m,
                onFocus: g,
                onBlur: f,
                renderLeftAccessories: h,
            },
            a.id,
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: a, compact: s } = e;
    return n
        ? (0, i.jsx)(T, { channel: a, message: l })
        : (0, i.jsx)(_.Ay, { message: l, content: t, compact: s ?? !1 });
}
