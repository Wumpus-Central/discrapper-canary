var n = '(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3})',
    i = '[0-9a-wy-z]',
    r = i + '(?:-[a-z0-9]{2,8})+',
    a = 'x(?:-[a-z0-9]{1,8})+',
    s = RegExp('^(?:' + ('(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-' + n + ')*(?:-' + r + ')*(?:-' + a) + ')?|' + a + '|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$', 'i'),
    o = RegExp('^(?!x).*?-(' + n + ')-(?:\\w{4,8}-(?!x-))*\\1\\b', 'i'),
    l = RegExp('^(?!x).*?-(' + i + ')-(?:\\w+-(?!x-))*\\1\\b', 'i'),
    u = RegExp('-' + r, 'ig');
(t.expBCP47Syntax = s), (t.expVariantDupes = o), (t.expSingletonDupes = l), (t.expExtSequences = u);
