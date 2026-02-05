n.d(t, { A: () => a }), n(321073);
var l = n(64700),
    i = n(417597),
    s = n(591552);
function a(e) {
    let t = (0, i.yK)([s.A], () => s.A.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            n = [],
            l = [],
            i = [],
            s = [];
        for (var a = 0; a < t.length; a++) {
            let r = t[a];
            r.isNew
                ? n.push(r)
                : r.hasNewAnswers
                  ? (l.push(r), (e += r.options.filter((e) => e.isUnseen).length))
                  : r.inOnboarding
                    ? s.push(r)
                    : i.push(r);
        }
        return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: n,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: i.concat(s),
        };
    }, [t]);
}
