"use strict";
n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    _ = n(155718),
    h = n(775602),
    f = n(260762),
    E = n(861382),
    p = n(522602),
    m = n(234320),
    g = n(215497),
    A = n(834730),
    I = n(939249),
    T = n(780777),
    S = n(565150),
    N = n(424170),
    C = n(31717),
    y = n(914905),
    O = n(650583),
    R = n(375708),
    v = n(402913);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        o = r.useRef(null),
        [l, u] = r.useState(!1),
        c = p.A.getUpload(t, n.name, C.C.SlashCommand),
        h = r.useRef(null),
        f = n.type === _.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: E,
            typesFormattedString: m,
            validateFilenames: b,
            showInvalidFileTypeAlert: L,
        } = (0, N.M1)(f),
        D = r.useCallback(() => {
            u(!0);
        }, []),
        w = r.useCallback(() => {
            u(!1);
        }, []),
        P = r.useCallback(
            (e, i) => {
                if (E.length > 0 && !b([e.name])) return L();
                let r = { id: n.name, file: e, platform: S.xz.WEB, origin: i };
                d.A.setFile({ channelId: t, id: n.name, file: r, draftType: C.C.SlashCommand, allowOptimization: !1 });
            },
            [E.length, b, n.name, t, L],
        ),
        M = r.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && P(t, "drag_drop");
            },
            [P],
        );
    return (r.useEffect(() => {
        let e = h.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", D, !1),
                e?.addEventListener("dragleave", w, !1),
                e?.addEventListener("drop", M, !1)),
            () => {
                e?.removeEventListener("dragover", D, !1),
                    e?.removeEventListener("dragleave", w, !1),
                    e?.removeEventListener("drop", M, !1);
            }
        );
    }, [c, D, w, M]),
    null != c)
        ? (0, i.jsx)(y.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: C.C.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(A.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(A.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, i.jsxs)(g.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: function (e) {
                  e.key === O.dh.ENTER && (e.preventDefault(), o.current?.activateUploadDialogue());
              },
              className: a()(v.xd, { [v.LB]: l }),
              draftType: C.C.SlashCommand,
              ref: h,
              children: [
                  (0, i.jsx)("span", { className: a()(v.fS, { [v.Vg]: l }), children: n.displayName }),
                  (0, i.jsx)(I.D, {
                      className: v.uN,
                      onClick: () => o.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: v.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: v.H9, alt: "" }),
                              (0, i.jsx)(A.E, {
                                  className: v.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != m ? R.intl.format(R.t.JJzx48, { types: m }) : R.intl.string(R.t.IJyOUf),
                              }),
                              (0, i.jsx)(T.A, {
                                  ref: o,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (P(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: E.length > 0 ? [{ name: "", extensions: E }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: v.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var L = n(652215),
    D = n(386016),
    w = n(429128);
let P = [];
function M(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: A = !1 } = e,
        I = (0, u.bG)([h.Ay], () => h.Ay.keyboardModeEnabled),
        T = (0, f.A)("attachments", l.Gl.HORIZONTAL),
        S = (0, u.bG)([p.A], () => p.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: N,
            commandOptions: C,
            commandOptionStates: O,
        } = (0, u.cf)([E.A], () => {
            let e = E.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: P, commandOptionStates: null };
            let n = E.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        R = r.useMemo(() => C?.filter((e) => e.type === _.n4.ATTACHMENT && O?.[e.name]?.hasValue) ?? [], [C, O]),
        [v, M] = r.useState([]);
    r.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let x = r.useCallback(() => {
        T.focusFirstVisibleItem();
    }, [T]);
    (0, m.Vo)({ event: L.jej.FOCUS_ATTACHMENT_AREA, handler: x });
    let U = { isApplicationCommand: N, previousUploadOptions: v, uploadOptions: R },
        k = r.useRef(U);
    r.useEffect(() => {
        k.current = U;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = k.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    M(r);
            }
        }, [t, R.length, n]);
    let G = S.filter((e) => e.filename !== s);
    return (!N && 0 === G.length) || (N && 0 === R.length)
        ? null
        : (0, i.jsx)(o.hD, {
              navigator: T,
              children: (0, i.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: r, ...s } = e;
                      return (0, i.jsx)("ul", {
                          ref: r,
                          ...s,
                          className: a()(D.I, w.KK),
                          children: N
                              ? R.map((e) => (0, i.jsx)(b, { channelId: t, keyboardModeEnabled: I, option: e }, e.name))
                              : G.map((e) =>
                                    (0, i.jsx)(
                                        y.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: I,
                                            clip: e.clip,
                                            size: A ? g.L.SMALL : g.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let x = r.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: r, ignoreFile: s, smallAttachments: a = !1 } = e;
    return r ? (0, i.jsx)(M, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
