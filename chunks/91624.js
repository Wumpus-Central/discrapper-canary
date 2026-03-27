n.d(t, { A: () => N }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(665260),
    a = n(311907),
    r = n(843472),
    o = n(155718),
    c = n(355622),
    d = n(133343),
    u = n(961350),
    h = n(580745),
    m = n(71393),
    A = n(576705),
    g = n(203982),
    p = n(460350),
    f = n(145530),
    _ = n(291812),
    E = n(205120),
    x = n(652215);
n(294920);
var C = n(480972);
function S(e) {
    let { value: t, channel: n } = e;
    return (0, p.i)({ type: c.oU.EDIT, content: t, channel: n, restrictMentions: !1, respectCooldown: !1 });
}
function I(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: d } = n,
        g = t.getGuildId(),
        p = (0, a.bG)([m.A], () => m.A.getGuild(g), [g]),
        _ = t.type === x.rbe.GUILD_ANNOUNCEMENT,
        I = null != p && p.features.has(x.GuildFeatures.NEWS),
        N = _ && I,
        {
            editingMessage: v,
            editingTextValue: b,
            editingRichValue: y,
        } = (0, a.cf)(
            [h.A],
            () => ({
                editingMessage: h.A.getEditingMessage(c),
                editingTextValue: h.A.getEditingTextValue(c),
                editingRichValue: h.A.getEditingRichValue(c),
            }),
            [c],
        ),
        j = (0, a.bG)([u.default], () => u.default.getId()),
        R = l.useCallback(
            (e, i, l) => {
                let { content: a } = l,
                    c = A.A.can(x.xBc.MANAGE_MESSAGES, t),
                    d = null != v && null != v.author ? v.author.id : null,
                    u = N && (d === j || c),
                    h = { content: a, components: void 0 };
                if (n.hasFlag(x.pr7.IS_COMPONENTS_V2)) {
                    let e = n.components[0]?.type === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, { type: o.I5.TEXT_DISPLAY, content: a, id: "82744" }),
                        (h.content = ""),
                        (h.components = t);
                }
                return (
                    u && null != v && (0, s.Lt)(v.flags, x.pr7.CROSSPOSTED)
                        ? f.A.confirmEdit(e, i, h)
                        : r.A.editMessage(e, i, h),
                    Promise.resolve()
                );
            },
            [v, N, j, t, n],
        ),
        M = l.useCallback((e) => (0, l.createElement)(T, { ...e, className: C.gM, key: d }), [d]);
    return null != b && null != y
        ? (0, i.jsx)(E.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: b,
              richValue: y,
              onCancel: r.A.endEditMessage,
              onChange: r.A.updateEditMessage,
              onConfirmDelete: f.A.confirmDelete,
              saveMessage: R,
              validateEdit: S,
              children: M,
          })
        : null;
}
function T(e) {
    let {
            textValue: t,
            richValue: n,
            message: s,
            channel: a,
            onChange: r,
            onSubmit: o,
            onKeyDown: u,
            renderLeftAccessories: h,
        } = e,
        [m, A] = l.useState(!0),
        p = l.useCallback(() => A(!0), []),
        f = l.useCallback(() => A(!1), []);
    return (
        l.useEffect(
            () => (
                g._.subscribe(x.jej.TEXTAREA_FOCUS, p),
                g._.subscribe(x.jej.TEXTAREA_BLUR, f),
                () => {
                    g._.unsubscribe(x.jej.TEXTAREA_FOCUS, p), g._.unsubscribe(x.jej.TEXTAREA_BLUR, f);
                }
            ),
            [p, f],
        ),
        (0, i.jsx)(
            d.Ay,
            {
                className: C.gM,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.oU.EDIT,
                onChange: r,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: u,
                focused: m,
                onFocus: p,
                onBlur: f,
                renderLeftAccessories: h,
            },
            s.id,
        )
    );
}
function N(e, t, n) {
    let { message: l, channel: s, compact: a } = e;
    return n
        ? (0, i.jsx)(I, { channel: s, message: l })
        : (0, i.jsx)(_.Ay, { message: l, content: t, compact: a ?? !1 });
}
