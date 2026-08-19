"use strict";
n.d(t, { A: () => k }), n(321073);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(837381),
    o = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    f = n(260762),
    p = n(861382),
    g = n(522602),
    x = n(234320),
    A = n(215497),
    E = n(834730),
    C = n(939249),
    I = n(780777),
    y = n(565150),
    S = n(424170),
    v = n(31717),
    _ = n(914905),
    N = n(650583),
    T = n(375708),
    j = n(922073);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, v.C.SlashCommand),
        m = i.useRef(null),
        f = n.type === h.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: p,
            typesFormattedString: x,
            validateFilenames: b,
            showInvalidFileTypeAlert: R,
        } = (0, S.M1)(f),
        L = i.useCallback(() => {
            u(!0);
        }, []),
        O = i.useCallback(() => {
            u(!1);
        }, []),
        M = i.useCallback(
            (e, l) => {
                if (p.length > 0 && !b([e.name])) return R();
                let i = { id: n.name, file: e, platform: y.xz.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: v.C.SlashCommand, allowOptimization: !1 });
            },
            [p.length, b, n.name, t, R],
        ),
        w = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && M(t, "drag_drop");
            },
            [M],
        );
    return (i.useEffect(() => {
        let e = m.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", L, !1),
                e?.addEventListener("dragleave", O, !1),
                e?.addEventListener("drop", w, !1)),
            () => {
                e?.removeEventListener("dragover", L, !1),
                    e?.removeEventListener("dragleave", O, !1),
                    e?.removeEventListener("drop", w, !1);
            }
        );
    }, [c, L, O, w]),
    null != c)
        ? (0, l.jsx)(_.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: v.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(E.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(E.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(A.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: function (e) {
                  e.key === N.dh.ENTER && (e.preventDefault(), a.current?.activateUploadDialogue());
              },
              className: r()(j.xd, { [j.LB]: o }),
              draftType: v.C.SlashCommand,
              ref: m,
              children: [
                  (0, l.jsx)("span", { className: r()(j.fS, { [j.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(C.D, {
                      className: j.uN,
                      onClick: () => a.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: j.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: j.H9, alt: "" }),
                              (0, l.jsx)(E.E, {
                                  className: j.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != x ? T.intl.format(T.t.JJzx48, { types: x }) : T.intl.string(T.t.IJyOUf),
                              }),
                              (0, l.jsx)(I.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (M(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: j.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var R = n(652215),
    L = n(787384),
    O = n(15328);
let M = [];
function w(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: E = !1 } = e,
        C = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
        I = (0, f.A)("attachments", o.Gl.HORIZONTAL),
        y = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: S,
            commandOptions: v,
            commandOptionStates: N,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: M, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        T = i.useMemo(() => v?.filter((e) => e.type === h.n4.ATTACHMENT && N?.[e.name]?.hasValue) ?? [], [v, N]),
        [j, w] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let k = i.useCallback(() => {
        I.focusFirstVisibleItem();
    }, [I]);
    (0, x.Vo)({ event: R.jej.FOCUS_ATTACHMENT_AREA, handler: k });
    let P = { isApplicationCommand: S, previousUploadOptions: j, uploadOptions: T },
        D = i.useRef(P);
    i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    w(i);
            }
        }, [t, T.length, n]);
    let U = y.filter((e) => e.filename !== s);
    return (!S && 0 === U.length) || (S && 0 === T.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: I,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: r()(L.I, O.KK),
                          children: S
                              ? T.map((e) => (0, l.jsx)(b, { channelId: t, keyboardModeEnabled: C, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        _.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: C,
                                            clip: e.clip,
                                            size: E ? A.L.SMALL : A.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let k = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: s, smallAttachments: r = !1 } = e;
    return i ? (0, l.jsx)(w, { channelId: t, type: n, ignoreFile: s, smallAttachments: r }) : null;
});
