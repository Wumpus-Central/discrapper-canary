i.r(e);
var n = i(200651),
    s = i(192379),
    a = i(481060),
    l = i(388032),
    o = i(35920);
e.default = (t) => {
    let { transitionState: e, processFiles: i, onClose: r } = t;
    return (
        s.useEffect(() => {
            (async () => {
                e === a.ModalTransitionState.ENTERED && (await i(), r());
            })();
        }, [r, i, e]),
        (0, n.jsx)(a.ModalRoot, {
            transitionState: e,
            size: a.ModalSize.SMALL,
            'aria-label': l.intl.string(l.t['B/HSDQ']),
            children: (0, n.jsxs)(a.ModalContent, {
                className: o.modalContent,
                children: [
                    (0, n.jsx)(a.Spinner, { className: o.spinner }),
                    (0, n.jsx)(a.FormSection, {
                        tag: a.FormTitleTags.H1,
                        titleClassName: o.title,
                        title: l.intl.string(l.t['B/HSDQ']),
                        className: o.__invalid_content,
                        children: (0, n.jsx)(a.FormText, {
                            type: a.FormTextTypes.DESCRIPTION,
                            className: o.description,
                            children: l.intl.string(l.t.k7OALi)
                        })
                    })
                ]
            })
        })
    );
};
