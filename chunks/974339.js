r.d(t, { Z: () => Z }), r(388685);
var n = r(951288),
    l = r(647438),
    o = r(120356),
    i = r.n(o);
if (12633 == r.j) var s = r(91192);
var a = r(481060),
    c = r(385499),
    u = r(313201),
    d = r(565138),
    m = r(605436),
    x = r(537383),
    b = r(71080),
    h = r(388032),
    f = r(613007);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function g(e, t) {
    if (null == e) return {};
    var r,
        n,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (l[r] = e[r]);
            return l;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    }
    return l;
}
function p(e) {
    var t = (function (e, t) {
        if ("object" !== w(e) || null === e) return e;
        var r = e[Symbol.toPrimitive];
        if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== w(n)) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === t ? String : Number)(e);
    })(e, "string");
    return "symbol" === w(t) ? t : String(t);
}
function w(e) {
    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
}
let j = (0, u.hQ)(),
    O = (0, u.hQ)();
function v(e) {
    return "".concat(e.rowType, ":").concat(e.id);
}
let S =
        12633 == r.j
            ? l.createContext({
                  searchRef: { current: null },
                  selectedSection: 0,
                  selectedRow: -1,
                  roles: [],
                  members: [],
                  users: [],
                  guilds: [],
                  pendingAdditions: {},
                  isAtMaxPendingRows: !1,
                  onSelectionChange: () => {},
                  onRowClick: () => {},
                  query: "",
                  onQueryChange: () => {},
                  onQueryClick: () => {},
                  onRemovePendingAddition: () => {},
              })
            : null,
    E = () => l.useContext(S),
    R = 12633 == r.j ? [] : null;
function T(e) {
    let { roles: t = R, members: r = R, users: n = R, guilds: o = R } = e;
    return l.useMemo(() => [t.length, r.length, n.length, o.length], [t.length, r.length, n.length, o.length]);
}
let P = (e) => {
    let { title: t } = e;
    return (0, n.jsx)(
        a.vwX,
        {
            tag: "h5",
            className: i()(f.sectionTitle, f.rowHeight),
            children: t,
        },
        t,
    );
};
function C(e) {
    var t, r;
    let { id: l, sectionIndex: o, rowIndex: c, rows: u, children: d, showCheckbox: x, showRowLabel: h } = e,
        g = (0, s.JA)(l),
        { selectedSection: p, selectedRow: w, onSelectionChange: j, pendingAdditions: O, onRowClick: S } = E(),
        R = u[c],
        T = v(R),
        P = R.disabled || T in O,
        C = R.disabled;
    return (0, n.jsxs)(
        a.P3F,
        ((t = y({}, g)),
        (r = r =
            {
                id: l,
                role: "option",
                className: i()(f.clickableRow, { [f.selectedRow]: p === o && w === c }),
                onClick: (e) => {
                    C || (e.preventDefault(), R.rowType !== b.aC.EMPTY_STATE && S(R));
                },
                onMouseEnter: () => j(o, c, !1),
                "aria-disabled": C,
                "aria-selected": P,
                "aria-setsize": u.length,
                "aria-posinset": c + 1,
                children: [
                    x
                        ? (0, n.jsx)(a.XZJ, {
                              className: f.checkbox,
                              displayOnly: !0,
                              size: 18,
                              value: P,
                              type: a.XZJ.Types.INVERTED,
                              disabled: C,
                              children: (0, n.jsx)("div", {
                                  className: f.rowBody,
                                  children: d,
                              }),
                          })
                        : (0, n.jsx)("div", {
                              className: f.rowBody,
                              children: d,
                          }),
                    h
                        ? (0, n.jsx)(a.Text, {
                              color: "text-muted",
                              variant: "text-xs/normal",
                              children: m.zB(R.rowType),
                          })
                        : null,
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
let k = (e) => {
        let { index: t, disabledText: r } = e,
            { roles: l } = E(),
            o = l[t];
        return null == o
            ? null
            : (0, n.jsxs)(C, {
                  id: "roles-row-".concat(t),
                  sectionIndex: b.m$.ROLES,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)("div", {
                          className: i()(f.rowHeight, f.alignCenter),
                          children: (0, n.jsx)(a.lZ8, {
                              size: "custom",
                              color: o.colorString,
                              height: 20,
                          }),
                      }),
                      (0, n.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: "text-sm/medium",
                                  color: o.rowType === b.aC.EMPTY_STATE ? "text-muted" : "text-default",
                                  children: o.name,
                              }),
                              o.disabled && null != r
                                  ? (0, n.jsx)(a.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/normal",
                                        children: r,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    I = (e) => {
        let { index: t } = e,
            { members: r } = E(),
            l = r[t];
        return null == l
            ? null
            : (0, n.jsxs)(C, {
                  id: "members-row-".concat(t),
                  sectionIndex: b.m$.MEMBERS,
                  rowIndex: t,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(a.qEK, {
                          src: l.avatarURL,
                          size: a.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, n.jsx)(a.Text, {
                          className: f.rowLabel,
                          variant: "text-sm/normal",
                          children: l.name,
                      }),
                      null != l.nickname
                          ? (0, n.jsx)(a.Text, {
                                color: "text-muted",
                                className: f.rowLabelSubText,
                                variant: "text-sm/normal",
                                "aria-hidden": !0,
                                children: l.username,
                            })
                          : null,
                      l.bot && (0, n.jsx)(c.Z, { verified: l.verifiedBot }),
                  ],
              });
    },
    L = (e) => {
        let { index: t, disabledText: r } = e,
            { users: l } = E(),
            o = l[t];
        return null == o
            ? null
            : (0, n.jsxs)(C, {
                  id: "users-row-".concat(t),
                  sectionIndex: b.m$.USERS,
                  rowIndex: t,
                  rows: l,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(a.qEK, {
                          src: o.avatarURL,
                          size: a.EFr.SIZE_24,
                          "aria-label": "",
                      }),
                      (0, n.jsxs)("div", {
                          className: f.rowLabel,
                          children: [
                              (0, n.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  children: o.name,
                              }),
                              o.disabled && null != r
                                  ? (0, n.jsx)(a.Text, {
                                        color: "header-secondary",
                                        variant: "text-xs/normal",
                                        children: r,
                                    })
                                  : null,
                          ],
                      }),
                  ],
              });
    },
    M = (e) => {
        let { index: t } = e,
            { guilds: r } = E(),
            l = r[t];
        return null == l
            ? null
            : (0, n.jsxs)(C, {
                  id: "guilds-row-".concat(t),
                  sectionIndex: b.m$.GUILDS,
                  rowIndex: t,
                  rows: r,
                  showCheckbox: !0,
                  showRowLabel: !0,
                  children: [
                      (0, n.jsx)(d.Z, {
                          guild: l.guild,
                          active: !0,
                          size: d.Z.Sizes.SMALLER,
                      }),
                      (0, n.jsx)("div", {
                          className: f.rowLabel,
                          children: (0, n.jsx)(a.Text, {
                              variant: "text-sm/medium",
                              color: "text-default",
                              children: l.name,
                          }),
                      }),
                  ],
              });
    },
    Z =
        12633 == r.j
            ? {
                  SECTION_HEIGHT: 32,
                  ROW_HEIGHT: 40,
                  Provider: (e) => {
                      let {
                              children: t,
                              listRef: r,
                              query: o,
                              setQuery: i,
                              pendingAdditions: s,
                              setPendingAdditions: a,
                              roles: c = R,
                              members: u = R,
                              users: d = R,
                              guilds: m = R,
                              getRichTag: x,
                              maxPendingRows: h,
                          } = e,
                          f = l.useRef(null),
                          [w, j] = l.useState({
                              section: 0,
                              row: -1,
                          });
                      function O(e) {
                          var t;
                          let r = v(e);
                          a((t) => {
                              if (r in t) {
                                  let { [r]: e } = t;
                                  return g(t, [r].map(p));
                              }
                              {
                                  let n = x(e);
                                  if (null != n) {
                                      let l = y({}, t);
                                      return (
                                          (l[r] = {
                                              display: n,
                                              row: e,
                                          }),
                                          l
                                      );
                                  }
                              }
                              return t;
                          }),
                              i(""),
                              null == (t = f.current) || t.focus();
                      }
                      l.useEffect(() => {
                          var e;
                          null == (e = f.current) || e.focus();
                      }, []);
                      let E = null != h && Object.keys(s).length >= h;
                      return (0, n.jsx)(S.Provider, {
                          value: {
                              searchRef: f,
                              selectedSection: w.section,
                              selectedRow: w.row,
                              roles: c,
                              members: u,
                              users: d,
                              guilds: m,
                              pendingAdditions: s,
                              isAtMaxPendingRows: E,
                              onSelectionChange: function (e, t) {
                                  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                                  if (
                                      (j((r) =>
                                          r.section === e && r.row === t
                                              ? r
                                              : {
                                                    section: null != e ? e : 0,
                                                    row: null != t ? t : -1,
                                                },
                                      ),
                                      n)
                                  ) {
                                      var l;
                                      null == r ||
                                          null == (l = r.current) ||
                                          l.scrollToIndex({
                                              section: null != e ? e : 0,
                                              row: null != t ? t : 0,
                                              padding: 8,
                                          });
                                  }
                              },
                              onRowClick: O,
                              query: o,
                              onQueryChange: i,
                              onQueryClick: function (e, t) {
                                  if (null == t) return;
                                  i("");
                                  let r = [];
                                  switch (e) {
                                      case b.m$.ROLES:
                                          r = c;
                                          break;
                                      case b.m$.MEMBERS:
                                          r = u;
                                          break;
                                      case b.m$.USERS:
                                          r = d;
                                          break;
                                      case b.m$.GUILDS:
                                          r = m;
                                  }
                                  let n = r[t];
                                  null != n && n.rowType !== b.aC.EMPTY_STATE && O(n);
                              },
                              onRemovePendingAddition: function (e) {
                                  a((t) => {
                                      let { [e]: r } = t;
                                      return g(t, [e].map(p));
                                  });
                              },
                          },
                          children: t,
                      });
                  },
                  SearchBox: (e) => {
                      let { placeholderText: t, focusSearchAfterReady: r, isReady: o } = e,
                          {
                              searchRef: i,
                              selectedSection: s,
                              selectedRow: a,
                              pendingAdditions: c,
                              query: u,
                              onSelectionChange: d,
                              onQueryChange: m,
                              onQueryClick: b,
                              onRemovePendingAddition: h,
                              roles: f,
                              members: y,
                              users: g,
                              guilds: p,
                          } = E(),
                          { keys: w, tags: v } = l.useMemo(() => {
                              let e = Object.keys(c),
                                  t = e.map((e) => c[e].display);
                              return {
                                  keys: e,
                                  tags: t,
                              };
                          }, [c]),
                          S = T({
                              roles: f,
                              members: y,
                              users: g,
                              guilds: p,
                          });
                      return (0, n.jsx)(x.Z, {
                          ref: i,
                          query: u,
                          onQueryChange: m,
                          selectedSection: s,
                          selectedRow: a,
                          onSelectionChange: d,
                          onSelect: b,
                          tags: v,
                          sections: S,
                          onRemoveTag: (e) => h(w[e]),
                          placeholder: t,
                          focusAfterReady: r,
                          isReady: o,
                          "aria-labelledby": j,
                          "aria-controls": O,
                      });
                  },
                  renderSection: (e) => {
                      let { section: t } = e;
                      switch (t) {
                          case b.m$.ROLES:
                              return (0, n.jsx)(P, { title: h.intl.string(h.t.LPJmLy) });
                          case b.m$.MEMBERS:
                              return (0, n.jsx)(P, { title: h.intl.string(h.t["9Oq93t"]) });
                          case b.m$.USERS:
                              return (0, n.jsx)(P, { title: h.intl.string(h.t.nqDUBQ) });
                          case b.m$.GUILDS:
                              return (0, n.jsx)(P, { title: h.intl.string(h.t["7hB4kp"]) });
                          default:
                              return null;
                      }
                  },
                  renderRow: (e) => {
                      let { section: t, row: r } = e;
                      switch (t) {
                          case b.m$.ROLES:
                              return (0, n.jsx)(k, { index: r });
                          case b.m$.MEMBERS:
                              return (0, n.jsx)(I, { index: r });
                          case b.m$.USERS:
                              return (0, n.jsx)(L, { index: r });
                          case b.m$.GUILDS:
                              return (0, n.jsx)(M, { index: r });
                      }
                      return null;
                  },
                  useSections: T,
              }
            : null;
