n.d(t, { K: () => N, default: () => R });
var i = n(627968),
    l = n(64700),
    r = n(189213),
    s = n(17928),
    a = n(192308),
    E = n(834730),
    o = n(27620),
    _ = n(668131),
    c = n(797632),
    A = n(468035),
    I = n(198778),
    u = n(985018),
    T = n(772954);
function d(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: c } = e,
        { getSurveyResponses: d, setResponse: N, trackDisplayedQuestions: R } = (0, _.i)(),
        O = d(t),
        P = (0, A.i)(n),
        [S, C] = l.useState(P.blockId),
        [D, M] = l.useState(P.pageIndex),
        [m, p] = l.useState(!1),
        U = (e, n) => {
            N(t, e, n);
        },
        g = l.useCallback(
            () => (
                m
                    ? s()
                    : (0, a.openModal)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: u.intl.string(u.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: u.intl.string(u.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: u.intl.string(u.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(E.E, {
                                  variant: "text-md/normal",
                                  children: u.intl.string(u.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, m],
        ),
        k = l.useMemo(() => (null == S ? [] : (0, A.uy)(n, { blockId: S, pageIndex: D, responses: O })), [n, S, D, O]),
        f = l.useCallback(() => {
            if (null == n || null == S) return;
            let e = (0, A.vt)(n, { blockId: S, pageIndex: D, responses: O });
            R(t, k), e.isComplete && o.Ay.submitSurveyResponse(t, O), C(e.blockId), M(e.pageIndex), p(e.isComplete);
        }, [n, S, D, O, t, k, R]);
    l.useEffect(() => {
        0 === k.length && f();
    }, [k, f]);
    let y = l.useMemo(() => {
        if (m) return !1;
        for (let e of k) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = O[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [m, k, n, O]);
    return m
        ? (0, i.jsxs)(r.Modal, {
              transitionState: c,
              onClose: s,
              size: "md",
              title: u.intl.string(u.t.OSqLUF),
              actions: [{ variant: "primary", text: u.intl.string(u.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(E.E, { variant: "text-md/normal", children: u.intl.string(u.t["2scvdw"]) }),
                  (0, i.jsx)(E.E, { variant: "text-md/normal", children: u.intl.string(u.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: c,
              onClose: g,
              title: u.intl.string(u.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: u.intl.string(u.t.PDTjLN), onClick: f, disabled: !y }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === k.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: T.Qs,
                                children: k.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              I.A,
                                              { question: t, questionId: e, responses: O, onResponseChange: U },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function N(e) {
    null != (await o.Ay.fetchSurveyDetails(e)) &&
        (_.i.getState().clearSurveyResponses(e),
        (0, a.openModalLazy)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function R(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, s.bG)([c.A], () => c.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(E.E, { variant: "text-md/medium", className: T.Lq, children: u.intl.string(u.t.MKDeyL) })
        : (0, i.jsx)(d, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
