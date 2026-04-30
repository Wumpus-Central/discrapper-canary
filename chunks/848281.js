"use strict";
n.r(t), n.d(t, { Playground: () => K, PlaygroundStore: () => j });
var i = n(627968),
    r = n(64700),
    s = n(625903),
    a = n(624479),
    o = n(364522),
    l = n(349288),
    u = n(862328),
    c = n(980707),
    d = n(477782),
    _ = n(67811),
    f = n(922016),
    h = n(691540),
    p = n(990078),
    E = n(408278),
    m = n(839214),
    g = n(58736),
    A = n(180807),
    I = n(227542),
    T = n(84654),
    S = n(957565),
    N = n(761508);
function y(e) {
    let { groups: t, selectedStory: n, onStorySelect: s } = e;
    return (0, i.jsx)(N.V, {
        selectedItem: n,
        orientation: "vertical",
        onItemSelect: (e) => {
            null != e && s(e);
        },
        children: t.map((e, a) =>
            (0, i.jsxs)(
                r.Fragment,
                {
                    children: [
                        (0, i.jsx)(N.V.Header, { children: e.title }),
                        e.stories.map((e) =>
                            (0, i.jsx)(
                                N.V.Item,
                                {
                                    selectedItem: n,
                                    id: e.id,
                                    "aria-label": e.name,
                                    onItemSelect: () => {
                                        s(e.id);
                                    },
                                    children: (0, i.jsx)("span", {
                                        "data-testid": `playground-story-${e.id}`,
                                        children: e.name,
                                    }),
                                },
                                e.id,
                            ),
                        ),
                        a < t.length - 1 && (0, i.jsx)(N.V.Separator, {}),
                    ],
                },
                e.title,
            ),
        ),
    });
}
var C = n(503698),
    v = n.n(C),
    O = n(310784),
    R = n.n(O),
    b = n(331322),
    D = n(834730),
    L = n(292666),
    w = n(691885),
    M = n(150934),
    P = n(106236),
    x = n(895925);
function U(e) {
    let { controls: t, props: n, onPropsChange: r } = e,
        s = (e, t) => {
            r({ ...n, [e]: t });
        },
        a = Object.entries(t);
    return 0 === a.length
        ? null
        : (0, i.jsx)("div", {
              className: x.in,
              children: (0, i.jsx)(b.B, {
                  gap: 16,
                  children: a.map((e) => {
                      let [t, r] = e,
                          a = n[t] ?? r.defaultValue;
                      return (0, i.jsxs)(i.Fragment, {
                          children: [
                              "select" === r.type &&
                                  null != r.options &&
                                  (0, i.jsx)(w.l, {
                                      label: r.label,
                                      value: a,
                                      onSelectionChange: (e) => s(t, e),
                                      options: r.options,
                                      formatOption: (e) => {
                                          let { label: t, value: n } = e;
                                          return { id: n, value: n, label: t };
                                      },
                                      selectionMode: "single",
                                      fullWidth: !0,
                                  }),
                              "boolean" === r.type &&
                                  (0, i.jsx)(M.S, { checked: a, onChange: (e) => s(t, e), label: r.label }),
                              "text" === r.type &&
                                  (0, i.jsx)(L.k, { value: a, onChange: (e) => s(t, e), label: r.label }),
                              "number" === r.type &&
                                  (0, i.jsx)(L.k, {
                                      type: "number",
                                      value: String(a),
                                      min: r.minValue,
                                      onChange: (e) => s(t, Number(e)),
                                      label: r.label,
                                  }),
                              "slider" === r.type &&
                                  (0, i.jsx)(P.A, {
                                      initialValue: null != a ? Number(a) : 0,
                                      value: null != a ? Number(a) : void 0,
                                      minValue: r.minValue,
                                      maxValue: r.maxValue,
                                      keyboardStep: (r.maxValue - r.minValue) * 0.05,
                                      asValueChanges: (e) => s(t, e),
                                      handleSize: 10,
                                      disabled: !1,
                                      stickToMarkers: !1,
                                      fillStyles: {},
                                      label: r.label,
                                      onValueRender: (e) => String(Math.round(1e3 * e) / 1e3),
                                  }),
                              "color" === r.type &&
                                  (0, i.jsxs)("div", {
                                      className: x.fJ,
                                      children: [
                                          (0, i.jsx)(D.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              tag: "label",
                                              children: r.label,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: x.nY,
                                              children: [
                                                  (0, i.jsx)("input", {
                                                      type: "color",
                                                      className: x.oP,
                                                      value: (function (e) {
                                                          if (null == e || "" === e) return k;
                                                          try {
                                                              return R()(e).hex();
                                                          } catch {
                                                              return k;
                                                          }
                                                      })(a),
                                                      onChange: (e) => s(t, e.target.value),
                                                  }),
                                                  (0, i.jsx)(L.k, { value: a ?? "", onChange: (e) => s(t, e) }),
                                              ],
                                          }),
                                      ],
                                  }),
                          ],
                      });
                  }),
              }),
          });
}
let k = "#000000";
function G(e) {
    let t = e.controls,
        n = {};
    return (
        null != t &&
            Object.entries(t).forEach((e) => {
                let [t, i] = e;
                n[t] = i.defaultValue;
            }),
        n
    );
}
function F(e) {
    let t,
        { story: n, controlsLayout: s } = e,
        [a, o] = r.useState(n.id),
        [l, u] = r.useState(() => G(n));
    a !== n.id && (o(n.id), u(G(n)));
    let c = "hidden" !== s && null != n.controls;
    return (0, i.jsxs)("div", {
        className: v()(x.iW, { [x.vT]: "bottom" === s, [x.Ix]: "right" === s }),
        children: [
            (0, i.jsx)("div", {
                className: x.Ji,
                children: (0, i.jsx)("div", {
                    className: x.Dw,
                    children: ((t = n.component), (0, i.jsx)(t, { ...l }, n.id)),
                }),
            }),
            c &&
                null != n.controls &&
                (0, i.jsx)("div", {
                    className: v()(x.ne, { [x.WK]: "bottom" === s, [x.BT]: "right" === s }),
                    children: (0, i.jsx)(U, { controls: n.controls, props: l, onPropsChange: u }),
                }),
        ],
    });
}
var V = n(97483),
    B = n(818348),
    H = n(375708);
let j = (0, m.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function Y() {
    let e = (0, I.A)(),
        t = (0, A.A)(),
        n = (0, T.A)(),
        s = j.useField("controlsLayout"),
        a = r.useMemo(
            () =>
                (0, i.jsxs)(
                    d.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(d.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => j.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, i.jsx)(d.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => j.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, i.jsx)(d.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => j.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === s,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [s],
        );
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        onSelect: B.tE,
        navId: "playground-settings-menu",
        onClose: B.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(d.Dr, {
                id: "appearance",
                label: H.intl.string(H.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, i.jsx)(d.Dr, {
                id: "accessibility",
                label: H.intl.string(H.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(d.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function W() {
    let e = r.useRef(null);
    return (0, i.jsx)(f.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(Y, {}),
        position: "bottom",
        align: "center",
        animation: f.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(E.K, {
                size: "sm",
                icon: s.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function K(e) {
    let { configs: t } = e,
        n = j.useField("selectedCollection"),
        s = j.useField("selectedStory"),
        c = j.useField("controlsLayout"),
        d = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: f,
            group: m,
            story: A,
        } = r.useMemo(() => {
            let e = null != n ? d.find((e) => e.id === n) : d[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === s)),
                i = t?.stories.find((e) => e.id === s) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, s, d]),
        I = f?.name ?? "Design System",
        T = A?.name;
    return (0, i.jsxs)("div", {
        className: x.zr,
        children: [
            (0, i.jsx)("div", {
                className: x.Os,
                children: d.map((e) =>
                    (0, i.jsx)(
                        u.Q,
                        {
                            children: (0, i.jsx)(p.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(_.j, {
                                    name: e.name,
                                    selected: (n ?? d[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id), void j.setState({ selectedCollection: t, selectedStory: null })
                                        );
                                    },
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: x.Qs,
                children: [
                    (0, i.jsxs)(g.Ay, {
                        className: x.wx,
                        children: [
                            null != I ? (0, i.jsx)(g.Ay.Title, { children: I }) : null,
                            null != T
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != I ? (0, i.jsx)(g.Ay.Caret, { className: x.zN }) : null,
                                          (0, i.jsx)(g.Ay.Title, { children: T }),
                                      ],
                                  })
                                : null,
                            A?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(g.Ay.Divider, { className: x.zN }),
                                          (0, i.jsx)(g.Ay.Title, {
                                              children: (0, i.jsx)(l.Anchor, { href: A.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != f
                                ? (0, i.jsx)(E.K, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.T,
                                      onClick: () => {
                                          if (null == f) return;
                                          let e =
                                              null != A
                                                  ? `dev://playground/${f.id}/${A.id}`
                                                  : `dev://playground/${f.id}`;
                                          (0, S.C)(e, () =>
                                              (0, h.P0)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: V.Ck.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, i.jsx)("div", { className: x.IE, children: (0, i.jsx)(W, {}) }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: x.MY,
                        children: [
                            (0, i.jsx)(o.Ip, {
                                fade: !0,
                                className: x.pz,
                                children:
                                    null != f
                                        ? (0, i.jsx)(y, {
                                              groups: f.groups,
                                              selectedStory: s,
                                              onStorySelect: (e) => {
                                                  j.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: x.Qs,
                                children:
                                    null != A && null != m
                                        ? (0, i.jsx)(F, { story: A, groupTitle: m.title, controlsLayout: c })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
