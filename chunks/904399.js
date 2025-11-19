n.d(t, { Z: () => l }), n(388685);
var r = n(54381);
n(473749);
var i = n(907331),
    a = n(481060),
    o = n(530612),
    s = n(41856);
function l(e) {
    let {
            users: t,
            selectedUsers: n,
            onSelectionChange: l,
            isFetching: c,
            onFetchMore: u,
            isUserDisabled: d,
            searchQuery: f = "",
            emptySearchContent: _,
            className: p,
        } = e,
        h = (0, i.O)((e) => {
            e && !c && (null == u || u());
        });
    return f.length > 0 && 0 === t.size && null != _
        ? (0, r.jsxs)("div", {
              className: s.emptySearchResultsContainer,
              children: [
                  (0, r.jsx)(a.Heading, {
                      variant: "heading-md/semibold",
                      color: "header-primary",
                      children: _.header,
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/medium",
                      color: "text-secondary",
                      children: _.body,
                  }),
              ],
          })
        : (0, r.jsxs)(a.u2D, {
              className: p,
              children: [
                  Array.from(t.values()).map((e) =>
                      (0, r.jsx)(
                          o.Z,
                          {
                              user: e,
                              checked: n.has(e.id),
                              disabled: !!(null == d ? void 0 : d(e)),
                              onChange: (e, t) => {
                                  l(e, t);
                              },
                          },
                          e.id,
                      ),
                  ),
                  c && (0, r.jsx)(a.$jN, {}),
                  (0, r.jsx)("div", { ref: h }),
              ],
          });
}
