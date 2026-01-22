n.d(t, { J: () => A }), n(747238), n(812715), n(896048);
var r = n(87955),
    i = n(735438),
    a = n.n(i),
    s = n(621466),
    o = n(77729),
    l = n(626584),
    c = n(773669),
    u = n(403362),
    d = n(626457),
    f = n(565314);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let _ = 250,
    h = new l.A("Spellchecker"),
    m = null === o.A || void 0 === o.A ? void 0 : o.A.spellCheck;
function g(e) {
    var t;
    e = null != (t = f.A[e]) ? t : e;
    let n = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == n || null == n.langtag.language || null == n.langtag.region)
        return void h.error("".concat(e, " is not a valid locale."));
    let { language: i, region: a } = n.langtag;
    return "".concat(i.language.toLowerCase(), "-").concat(a.toUpperCase());
}
class E {
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        m.setLearnedWords(e);
    }
    setLocale(e) {
        var t;
        null == (t = m.setLocale(e)) ||
            t.then((t) => {
                h.info("Switching to ".concat(e), t ? "(available)" : "(unavailable)");
            });
    }
    setAppLocale(e) {
        this.regionPreference = e.split("-")[1];
    }
    detectLanguage(e) {
        this.enabled && this.languageDetector.process(e);
    }
    getAvailableLanguages(e) {
        let t = {};
        return (
            e.forEach((e) => {
                var n;
                let [r] = e.split("-");
                t[r] = null != (n = t[r]) ? n : e;
            }),
            t
        );
    }
    isMisspelled(e, t) {
        return "" !== this.misspelledWord && e === this.misspelledWord;
    }
    getCorrectionsForMisspelling(e, t) {
        return this.isMisspelled(e, t) ? this.corrections : [];
    }
    replaceMisspelling(e) {
        m.replaceMisspelling(e);
    }
    constructor(e) {
        p(this, "languageDetector", void 0),
            p(this, "regionPreference", void 0),
            p(this, "_enabled", !0),
            p(this, "misspelledWord", ""),
            p(this, "corrections", []);
        const [t, n] = c.default.locale.split("-");
        this.regionPreference = n;
        const r = this.getAvailableLanguages(e);
        (this.languageDetector = new d.A(t, (n) => {
            let i = "".concat(n, "-").concat(this.regionPreference);
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                var a;
                let e = null != (a = r[n]) ? a : f.A[t];
                null != e && this.setLocale(e);
            }
        })),
            m.on("spellcheck-result", (e, t) => {
                (this.misspelledWord = null != e ? e : ""), (this.corrections = null != t ? t : []);
            });
    }
}
let b = a().debounce((e, t) => {
    let n = O(t);
    null != n && e.detectLanguage(n);
}, _);
function y(e) {
    null != document.body && document.body.addEventListener("beforeinput", (t) => b(e, t.target), !0);
}
function O(e) {
    return null == e
        ? null
        : (0, s.vq)(e, HTMLInputElement) || (0, s.vq)(e, HTMLTextAreaElement)
          ? e.value
          : (0, s.vq)(e) && e.hasAttribute("contenteditable")
            ? e.textContent
            : void 0;
}
async function A() {
    var e;
    let t = new E((null != (e = await m.getAvailableDictionaries()) ? e : []).map(g).filter(u.Vq));
    return y(t), t;
}
