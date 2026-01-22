n.d(t, { A: () => _ }), n(938796), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(665260),
    a = n(311907),
    s = n(843472),
    o = n(155718),
    c = n(355622),
    u = n(133343),
    d = n(961350),
    f = n(580745),
    p = n(71393),
    h = n(576705),
    b = n(203982),
    g = n(460350),
    m = n(145530),
    A = n(291812),
    y = n(205120),
    O = n(652215);
n(294920);
var j = n(119907);
function v(e) {
    let { value: t, channel: n } = e;
    return (0, g.i)({
        type: c.oU.EDIT,
        content: t,
        channel: n,
        restrictMentions: !1,
        respectCooldown: !1,
    });
}
function x(e) {
    let { channel: t, message: n } = e,
        { id: c } = t,
        { id: u } = n,
        b = t.getGuildId(),
        g = (0, a.bG)([p.A], () => p.A.getGuild(b), [b]),
        A = t.type === O.rbe.GUILD_ANNOUNCEMENT,
        x = null != g && g.features.has(O.GuildFeatures.NEWS),
        _ = A && x,
        {
            editingMessage: C,
            editingTextValue: S,
            editingRichValue: I,
        } = (0, a.cf)(
            [f.A],
            () => ({
                editingMessage: f.A.getEditingMessage(c),
                editingTextValue: f.A.getEditingTextValue(c),
                editingRichValue: f.A.getEditingRichValue(c),
            }),
            [c],
        ),
        N = (0, a.bG)([d.default], () => d.default.getId()),
        T = l.useCallback(
            (e, r, l) => {
                let { content: a } = l,
                    c = h.A.can(O.xBc.MANAGE_MESSAGES, t),
                    u = null != C && null != C.author ? C.author.id : null,
                    d = _ && (u === N || c),
                    f = {
                        content: a,
                        components: void 0,
                    };
                if (n.hasFlag(O.pr7.IS_COMPONENTS_V2)) {
                    var p;
                    let e = (null == (p = n.components[0]) ? void 0 : p.type) === o.I5.MEDIA_GALLERY,
                        t = n.components.filter((e) => e.type !== o.I5.TEXT_DISPLAY);
                    t.splice(+!!e, 0, {
                        type: o.I5.TEXT_DISPLAY,
                        content: a,
                        id: "".concat(82744),
                    }),
                        (f.content = ""),
                        (f.components = t);
                }
                return (
                    d && null != C && (0, i.Lt)(C.flags, O.pr7.CROSSPOSTED)
                        ? m.A.confirmEdit(e, r, f)
                        : s.A.editMessage(e, r, f),
                    Promise.resolve()
                );
            },
            [C, _, N, t, n],
        ),
        P = l.useCallback(
            (e) => {
                var t, n;
                return (0, l.createElement)(
                    E,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            className: j.gM,
                            key: u,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
            [u],
        );
    return null != S && null != I
        ? (0, r.jsx)(y.A, {
              ref: void 0,
              channel: t,
              message: n,
              textValue: S,
              richValue: I,
              onCancel: s.A.endEditMessage,
              onChange: s.A.updateEditMessage,
              onConfirmDelete: m.A.confirmDelete,
              saveMessage: T,
              validateEdit: v,
              children: P,
          })
        : null;
}
function E(e) {
    let {
            textValue: t,
            richValue: n,
            message: i,
            channel: a,
            onChange: s,
            onSubmit: o,
            onKeyDown: d,
            renderLeftAccessories: f,
        } = e,
        [p, h] = l.useState(!0),
        g = l.useCallback(() => h(!0), []),
        m = l.useCallback(() => h(!1), []);
    return (
        l.useEffect(
            () => (
                b._.subscribe(O.jej.TEXTAREA_FOCUS, g),
                b._.subscribe(O.jej.TEXTAREA_BLUR, m),
                () => {
                    b._.unsubscribe(O.jej.TEXTAREA_FOCUS, g), b._.unsubscribe(O.jej.TEXTAREA_BLUR, m);
                }
            ),
            [g, m],
        ),
        (0, r.jsx)(
            u.Ay,
            {
                className: j.gM,
                textValue: t,
                richValue: n,
                channel: a,
                type: c.oU.EDIT,
                onChange: s,
                onSubmit: (e) => {
                    let { value: t } = e;
                    return o(t);
                },
                onKeyDown: d,
                focused: p,
                onFocus: g,
                onBlur: m,
                renderLeftAccessories: f,
            },
            i.id,
        )
    );
}
function _(e, t, n) {
    let { message: l, channel: i, compact: a } = e;
    return n
        ? (0, r.jsx)(x, {
              channel: i,
              message: l,
          })
        : (0, r.jsx)(A.Ay, {
              message: l,
              content: t,
              compact: null != a && a,
          });
}
