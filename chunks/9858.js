"use strict";
n.d(t, { J: () => g });
var r = n(87955),
    i = n(735438),
    s = n.n(i),
    a = n(621466),
    o = n(77729),
    l = n(626584),
    u = n(773669),
    d = n(403362),
    c = n(626457),
    _ = n(565314);
let f = new l.A("Spellchecker"),
    E = o.A?.spellCheck;
function h(e) {
    e = _.A[e] ?? e;
    let t = (0, r.parse)(e.replace(/[_-]/g, "-"));
    if (null == t || null == t.langtag.language || null == t.langtag.region)
        return void f.error(`${e} is not a valid locale.`);
    let { language: n, region: i } = t.langtag;
    return `${n.language.toLowerCase()}-${i.toUpperCase()}`;
}
class p {
    languageDetector;
    regionPreference;
    _enabled = !0;
    misspelledWord = "";
    corrections = [];
    constructor(e) {
        const [t, n] = u.default.locale.split("-");
        this.regionPreference = n;
        const r = this.getAvailableLanguages(e);
        (this.languageDetector = new c.A(t, (n) => {
            let i = `${n}-${this.regionPreference}`;
            if (-1 !== e.indexOf(i)) this.setLocale(i);
            else {
                let e = r[n] ?? _.A[t];
                null != e && this.setLocale(e);
            }
        })),
            E.on("spellcheck-result", (e, t) => {
                (this.misspelledWord = e ?? ""), (this.corrections = t ?? []);
            });
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(e) {
        this._enabled = e;
    }
    setLearnedWords(e) {
        E.setLearnedWords(e);
    }
    setLocale(e) {
        E.setLocale(e)?.then((t) => {
            f.info(`Switching to ${e}`, t ? "(available)" : "(unavailable)");
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
                let [n] = e.split("-");
                t[n] = t[n] ?? e;
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
        E.replaceMisspelling(e);
    }
}
let m = s().debounce((e, t) => {
    var n;
    let r =
        null == (n = t)
            ? null
            : (0, a.vq)(n, HTMLInputElement) || (0, a.vq)(n, HTMLTextAreaElement)
              ? n.value
              : (0, a.vq)(n) && n.hasAttribute("contenteditable")
                ? n.textContent
                : void 0;
    null != r && e.detectLanguage(r);
}, 250);
async function g() {
    let e = new p(((await E.getAvailableDictionaries()) ?? []).map(h).filter(d.Vq));
    return null != document.body && document.body.addEventListener("beforeinput", (t) => m(e, t.target), !0), e;
}
