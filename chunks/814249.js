n.d(t, { K: () => I, default: () => N });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    a = n(311907),
    s = n(397927),
    o = n(236698),
    c = n(668131),
    _ = n(797632),
    E = n(468035),
    d = n(304937),
    u = n(985018),
    A = n(158677);
function T(e) {
    let { surveyId: t, survey: n, onClose: a, transitionState: _ } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, c.i)(),
        R = T(t),
        S = (0, E.i)(n),
        [C, O] = l.useState(S.blockId),
        [p, m] = l.useState(S.pageIndex),
        [P, D] = l.useState(!1),
        g = (e, n) => {
            I(t, e, n);
        },
        U = l.useCallback(
            () => (
                P
                    ? a()
                    : (0, s.qfG)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: u.intl.string(u.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: u.intl.string(u.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: u.intl.string(u.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), a();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(s.Text, {
                                  variant: "text-md/normal",
                                  children: u.intl.string(u.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [a, P],
        ),
        M = l.useMemo(() => (null == C ? [] : (0, E.uy)(n, { blockId: C, pageIndex: p, responses: R })), [n, C, p, R]),
        h = l.useCallback(() => {
            if (null == n || null == C) return;
            let e = (0, E.vt)(n, { blockId: C, pageIndex: p, responses: R });
            N(t, M), e.isComplete && o.Ay.submitSurveyResponse(t, R), O(e.blockId), m(e.pageIndex), D(e.isComplete);
        }, [n, C, p, R, t, M, N]);
    l.useEffect(() => {
        0 === M.length && h();
    }, [M, h]);
    let y = l.useMemo(() => {
        if (P) return !1;
        for (let e of M) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [P, M, n, R]);
    return P
        ? (0, i.jsxs)(r.Modal, {
              transitionState: _,
              onClose: a,
              size: "md",
              title: u.intl.string(u.t.OSqLUF),
              actions: [{ variant: "primary", text: u.intl.string(u.t.i4jeWR), onClick: a }],
              children: [
                  (0, i.jsx)(s.Text, { variant: "text-md/normal", children: u.intl.string(u.t["2scvdw"]) }),
                  (0, i.jsx)(s.Text, { variant: "text-md/normal", children: u.intl.string(u.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: _,
              onClose: U,
              title: u.intl.string(u.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: u.intl.string(u.t.PDTjLN), onClick: h, disabled: !y }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === M.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: A.Qs,
                                children: M.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              d.A,
                                              { question: t, questionId: e, responses: R, onResponseChange: g },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function I(e) {
    null != (await o.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, s.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function N(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, a.bG)([_.A], () => _.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(s.Text, { variant: "text-md/medium", className: A.Lq, children: u.intl.string(u.t.MKDeyL) })
        : (0, i.jsx)(T, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
