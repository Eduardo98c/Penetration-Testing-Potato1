var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://10.0.2.11/icons/', 'dir': '_m0/0', 'linked': 2, 'len': 274 },
    { 'url': 'http://10.0.2.11/potato/', 'dir': '_m0/1', 'linked': 2, 'len': 738 } ]
  },
  { 'mime': 'image/gif', 'samples': [
    { 'url': 'http://10.0.2.11/icons/a.gif', 'dir': '_m1/0', 'linked': 0, 'len': 246 },
    { 'url': 'http://10.0.2.11/icons/back.gif', 'dir': '_m1/1', 'linked': 2, 'len': 216 },
    { 'url': 'http://10.0.2.11/icons/blank.gif', 'dir': '_m1/2', 'linked': 2, 'len': 148 },
    { 'url': 'http://10.0.2.11/icons/p.gif', 'dir': '_m1/3', 'linked': 0, 'len': 237 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://10.0.2.11/potato.jpg', 'dir': '_m2/0', 'linked': 2, 'len': 5518 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://10.0.2.11/', 'dir': '_m3/0', 'linked': 2, 'len': 245 } ]
  }
];

var issue_samples = [
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://10.0.2.11/icons/a.gif', 'extra': '', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://10.0.2.11/icons/p.gif', 'extra': '', 'sid': '0', 'dir': '_i0/1' } ]
  },
  { 'severity': 0, 'type': 10404, 'samples': [
    { 'url': 'http://10.0.2.11/potato/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://10.0.2.11/potato/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://10.0.2.11/potato/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i1/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://10.0.2.11/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i2/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://10.0.2.11/', 'extra': 'Apache/2.4.41 (Ubuntu)', 'sid': '0', 'dir': '_i3/0' } ]
  }
];

