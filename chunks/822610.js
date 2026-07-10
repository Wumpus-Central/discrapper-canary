"use strict";
n.d(t, { A: () => w }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(741918),
    d = n(17928),
    c = n(228366),
    u = n(608299),
    _ = n(155718),
    E = n(775602),
    A = n(260762),
    h = n(861382),
    I = n(522602),
    f = n(234320),
    p = n(215497),
    T = n(834730),
    m = n(939249),
    g = n(780777),
    S = n(565150),
    N = n(424170),
    C = n(31717),
    R = n(914905),
    O = n(650583),
    L = n(375708),
    D = n(402913);
function y(e) {
    let { channelId: t, option: n, keyboardModeEnabled: a } = e,
        l = r.useRef(null),
        [o, d] = r.useState(!1),
        c = I.A.getUpload(t, n.name, C.C.SlashCommand),
        E = r.useRef(null),
        A = n.type === _.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: h,
            typesFormattedString: f,
            validateFilenames: y,
            showInvalidFileTypeAlert: v,
        } = (0, N.M1)(A),
        b = r.useCallback(() => {
            d(!0);
        }, []),
        M = r.useCallback(() => {
            d(!1);
        }, []),
        P = r.useCallback(
            (e, i) => {
                if (h.length > 0 && !y([e.name])) return v();
                let r = { id: n.name, file: e, platform: S.xz.WEB, origin: i };
                u.A.setFile({ channelId: t, id: n.name, file: r, draftType: C.C.SlashCommand, allowOptimization: !1 });
            },
            [h.length, y, n.name, t, v],
        ),
        U = r.useCallback(
            (e) => {
                d(!1);
                let t = e.dataTransfer?.files[0];
                null != t && P(t, "drag_drop");
            },
            [P],
        );
    return (r.useEffect(() => {
        let e = E.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", b, !1),
                e?.addEventListener("dragleave", M, !1),
                e?.addEventListener("drop", U, !1)),
            () => {
                e?.removeEventListener("dragover", b, !1),
                    e?.removeEventListener("dragleave", M, !1),
                    e?.removeEventListener("drop", U, !1);
            }
        );
    }, [c, b, M, U]),
    null != c)
        ? (0, i.jsx)(R.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: a,
              draftType: C.C.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(T.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(T.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, i.jsxs)(p.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: a,
              onKeyDown: function (e) {
                  e.key === O.dh.ENTER && (e.preventDefault(), l.current?.activateUploadDialogue());
              },
              className: s()(D.xd, { [D.LB]: o }),
              draftType: C.C.SlashCommand,
              ref: E,
              children: [
                  (0, i.jsx)("span", { className: s()(D.fS, { [D.Vg]: o }), children: n.displayName }),
                  (0, i.jsx)(m.D, {
                      className: D.uN,
                      onClick: () => l.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: D.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: D.H9, alt: "" }),
                              (0, i.jsx)(T.E, {
                                  className: D.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != f ? L.intl.format(L.t.JJzx48, { types: f }) : L.intl.string(L.t.IJyOUf),
                              }),
                              (0, i.jsx)(g.A, {
                                  ref: l,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (P(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: h.length > 0 ? [{ name: "", extensions: h }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: D.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var v = n(652215),
    b = n(386016),
    M = n(429128);
let P = [];
function U(e) {
    let { channelId: t, type: n, ignoreFile: a, smallAttachments: T = !1 } = e,
        m = (0, d.bG)([E.Ay], () => E.Ay.keyboardModeEnabled),
        g = (0, A.A)("attachments", o.Gl.HORIZONTAL),
        S = (0, d.bG)([I.A], () => I.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: N,
            commandOptions: C,
            commandOptionStates: O,
        } = (0, d.cf)([h.A], () => {
            let e = h.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: P, commandOptionStates: null };
            let n = h.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        L = r.useMemo(() => C?.filter((e) => e.type === _.n4.ATTACHMENT && O?.[e.name]?.hasValue) ?? [], [C, O]),
        [D, U] = r.useState([]);
    r.useEffect(() => {
        function e() {
            u.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let w = r.useCallback(() => {
        g.focusFirstVisibleItem();
    }, [g]);
    (0, f.Vo)({ event: v.jej.FOCUS_ATTACHMENT_AREA, handler: w });
    let G = { isApplicationCommand: N, previousUploadOptions: D, uploadOptions: L },
        x = r.useRef(G);
    r.useEffect(() => {
        x.current = G;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = x.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        u.A.remove(t, e.name, n.drafts.type);
                    }),
                    U(r);
            }
        }, [t, L.length, n]);
    let k = S.filter((e) => e.filename !== a);
    return (!N && 0 === k.length) || (N && 0 === L.length)
        ? null
        : (0, i.jsx)(l.hD, {
              navigator: g,
              children: (0, i.jsx)(l.PR, {
                  children: (e) => {
                      let { ref: r, ...a } = e;
                      return (0, i.jsx)("ul", {
                          ref: r,
                          ...a,
                          className: s()(b.I, M.KK),
                          children: N
                              ? L.map((e) => (0, i.jsx)(y, { channelId: t, keyboardModeEnabled: m, option: e }, e.name))
                              : k.map((e) =>
                                    (0, i.jsx)(
                                        R.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: m,
                                            clip: e.clip,
                                            size: T ? p.L.SMALL : p.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let w = r.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: r, ignoreFile: a, smallAttachments: s = !1 } = e;
    return r ? (0, i.jsx)(U, { channelId: t, type: n, ignoreFile: a, smallAttachments: s }) : null;
});
