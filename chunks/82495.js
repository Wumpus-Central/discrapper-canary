var r = t(582128);
t.d(
    n,
    {},
    {
        A: function (e, n, t) {
            let u = r.useRef(e);
            return (
                r.useEffect(() => {
                    function e(e) {
                        null == u.current ||
                            u.current.contains(e.target) ||
                            (t?.current != null && t.current.contains(e.target)) ||
                            n();
                    }
                    return (
                        document.addEventListener("mousedown", e),
                        () => {
                            document.removeEventListener("mousedown", e);
                        }
                    );
                }, [u, n, t]),
                u
            );
        },
    },
);
