import React, { useState, useEffect } from 'react';
import { 
  Play, CheckCircle, BookOpen, Clock, FileText, Download, User, Settings, 
  BarChart2, Plus, Edit3, Trash2, Award, Zap, Bell, Moon, Sun, Search, 
  ChevronRight, Lock, Eye, LogOut, Sparkles, Image, Video, Users, TrendingUp,
  ShieldCheck, ArrowRight, Star, Bookmark, PlayCircle, Filter, CreditCard, 
  Upload, AlertCircle, Key, LockKeyhole, DollarSign, Check, FileCheck, BrainCircuit,
  PieChart, CheckSquare, RefreshCw, Layers, Sliders, Cpu, ExternalLink, Tv, X, Power, ShieldAlert,
  Radio, Volume2, Trophy, Share2, Timer, MessageSquare, Send, ThumbsUp, Pin, Calendar, Smartphone,
  Award as MedalIcon, ClipboardList, CheckCircle2, HelpCircle, Activity
} from 'lucide-react';

// ==========================================
// INITIAL DATA FOR PRAVEEN SURANJANA SIR (A/L HISTORY)
// ==========================================

const INITIAL_HERO_BANNER = {
  teacherName: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
  subjectTitle: 'A/L History Masterclass (උසස් පෙළ ඉතිහාසය)',
  mainHeading: '2027 & 2028 A/L History A* Excellence Program',
  subMessage: 'Complete syllabus coverage, historical source analysis, past papers, and AI-evaluated model paper discussions in one unified LMS.',
  photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80',
  tagline: 'A/L HISTORY SPECIALIST'
};

// Multi-Teacher Profiles for Developer Management
const INITIAL_TEACHER_PROFILES = [
  {
    id: 'tp-praveen',
    appName: 'Praveen Suranjana History',
    tagline: '2027 & 2028 A/L History LMS',
    teacherName: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
    subjectName: 'A/L History (උසස් පෙළ ඉතිහාසය)',
    primaryColor: '#f59e0b',
    secondaryColor: '#8b5cf6',
    themePresetName: 'Royal History Gold',
    footerText: '© 2026 EduPrime LMS • Praveen Suranjana A/L History Academy.',
    isSystemActive: true,
    serviceFeeStatus: 'Paid',
    monthlyFeeDue: 'Rs. 15,000/=',
    nextBillingDate: '2026-12-01'
  },
  {
    id: 'tp-kasun',
    appName: 'Kasun Madushan Physics',
    tagline: '2027 & 2028 A/L Physics Theory & Revision',
    teacherName: 'Kasun Madushan (කසුන් මධුෂාන්)',
    subjectName: 'A/L Physics (උසස් පෙළ භෞතික විද්‍යාව)',
    primaryColor: '#0ea5e9',
    secondaryColor: '#6366f1',
    themePresetName: 'Cyber Science Blue',
    footerText: '© 2026 EduPrime LMS • Kasun Madushan Physics Academy.',
    isSystemActive: true,
    serviceFeeStatus: 'Paid',
    monthlyFeeDue: 'Rs. 15,000/=',
    nextBillingDate: '2026-12-05'
  },
  {
    id: 'tp-nimali',
    appName: 'Nimali Perera Biology',
    tagline: '2027 & 2028 A/L Bio Science Academy',
    teacherName: 'Nimali Perera (නිමාලි පෙරේරා)',
    subjectName: 'A/L Biology (උසස් පෙළ ජීව විද්‍යාව)',
    primaryColor: '#10b981',
    secondaryColor: '#059669',
    themePresetName: 'Emerald Bio Green',
    footerText: '© 2026 EduPrime LMS • Nimali Perera Biology Academy.',
    isSystemActive: false,
    serviceFeeStatus: 'Unpaid - Suspended',
    monthlyFeeDue: 'Rs. 15,000/=',
    nextBillingDate: '2026-11-10'
  }
];

const INITIAL_COURSES = [
  {
    id: 'c1',
    batchYear: '2027 A/L',
    title: '2027 A/L History - Complete Theory & Historical Sources',
    sinhalaTitle: '2027 උසස් පෙළ ඉතිහාසය - සම්පූර්ණ සිද්ධාන්ත සහ මූලාශ්‍ර අධ්‍යයනය',
    instructor: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
    category: 'Theory',
    feePerMonth: 2500,
    color1: '#090d16',
    color2: '#8b5cf6',
    description: 'ශ්‍රී ලංකා ඉතිහාසයේ මුල් යුගයේ සිට රාජධානිය පරිණාමය, සක්‍රීය මූලාශ්‍ර අධ්‍යයනය සහ විෂය නිර්දේශයේ සියලුම අනුකොටස්.',
    monthlyModules: [
      {
        monthId: 'm-2027-11',
        monthName: '2027 නොවැම්බර් (November Class)',
        isPaid: true,
        lessons: [
          {
            id: 'l101',
            title: '01. Primary Sources of Sri Lankan History - Deep Dive',
            sinhalaTitle: '01. ශ්‍රී ලංකා ඉතිහාසයේ මූලික ඓතිහාසික මූලාශ්‍ර සාකච්ඡාව',
            duration: '2h 30m',
            videoPlatform: 'YouTube',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            hasPdf: true,
            pdfName: 'Lesson_01_Historical_Sources.pdf',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            completed: true,
            type: 'Theory',
            summary: 'මහාවංශය, දීපවංශය සහ සෙල්ලිපි මූලාශ්‍රයන්හි ඓතිහාසික විශ්වසනීයත්වය.'
          },
          {
            id: 'l102',
            title: '02. Pre-historic Era & Inscriptions Analysis',
            sinhalaTitle: '02. පූර්ව ඓතිහාසික යුගය සහ බ්‍රාහ්මී සෙල්ලිපි',
            duration: '2h 10m',
            videoPlatform: 'Zoom',
            videoUrl: 'https://zoom.us/rec/play/sample-recording-link',
            hasPdf: false,
            pdfName: '',
            pdfUrl: '',
            completed: false,
            type: 'Theory',
            summary: 'අනුරාධපුර ආරම්භක යුගයේ පුරාවිද්‍යා මූලාශ්‍ර විමර්ශනය.'
          }
        ]
      },
      {
        monthId: 'm-2027-12',
        monthName: '2027 දෙසැම්බර් (December Class)',
        isPaid: false,
        lessons: [
          {
            id: 'l103',
            title: '03. Anuradhapura Kingdom & Water Civilization',
            sinhalaTitle: '03. අනුරාධපුර රාජධානිය සහ ජල ශිෂ්ටාචාරය',
            duration: '2h 45m',
            videoPlatform: 'YouTube',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            hasPdf: true,
            pdfName: 'Lesson_03_Water_Civilization.pdf',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            completed: false,
            type: 'Theory',
            summary: 'වැව් සංස්කෘතිය සහ වාරි තාක්ෂණික දියුණුව.'
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    batchYear: '2028 A/L',
    title: '2028 A/L History - Complete Foundation Theory',
    sinhalaTitle: '2028 උසස් පෙළ ඉතිහාසය - මූලික සිද්ධාන්ත පන්තිය',
    instructor: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
    category: 'Theory',
    feePerMonth: 2500,
    color1: '#051923',
    color2: '#00a8e8',
    description: '2028 A/L සිසුන් සඳහා උසස් පෙළ ඉතිහාස විෂය මුල සිට අගට සරලව සහ තර්කානුකූලව උගන්වන ආරම්භක පාඩම් මාලාව.',
    monthlyModules: [
      {
        monthId: 'm-2028-11',
        monthName: '2028 නොවැම්බර් (November Class)',
        isPaid: true,
        lessons: [
          {
            id: 'l201',
            title: '01. Introduction to Sri Lankan & World History Scope',
            sinhalaTitle: '01. උසස් පෙළ ඉතිහාසය විෂය හඳුන්වාදීම',
            duration: '2h 15m',
            videoPlatform: 'YouTube',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            hasPdf: true,
            pdfName: '2028_Lesson_01_Intro.pdf',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            completed: true,
            type: 'Theory',
            summary: 'ලංකා ඉතිහාසය සහ ලෝක ඉතිහාසය ප්‍රශ්න පත්‍ර ව්‍යුහය.'
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    batchYear: '2027 A/L',
    title: '2027 A/L History - Paper Class & AI Evaluated Tests',
    sinhalaTitle: '2027 උසස් පෙළ ඉතිහාසය - ප්‍රශ්න පත්‍ර සහ AI අගයන පන්තිය',
    instructor: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
    category: 'Paper Class',
    feePerMonth: 2500,
    color1: '#1a0c02',
    color2: '#f97316',
    description: 'සෑම මසකම ව්‍යුහගත සහ රචනා ප්‍රශ්න පත්‍ර ලියා PDF ලෙස යොමු කර Marking Scheme එකට අනුව AI මඟින් ලකුණු ලබා ගැනීමේ පන්තිය.',
    monthlyModules: [
      {
        monthId: 'm-2027-11-p',
        monthName: '2027 නොවැම්බර් (November Paper Class)',
        isPaid: true,
        lessons: [
          {
            id: 'l301',
            title: '01. Model Paper 01 Full Discussion & Marking Scheme',
            sinhalaTitle: '01. පළමු ආදර්ශ ප්‍රශ්න පත්‍ර සාකච්ඡාව',
            duration: '3h 00m',
            videoPlatform: 'YouTube',
            videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            hasPdf: true,
            pdfName: '2027_Model_Paper_01.pdf',
            pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            completed: true,
            type: 'Paper Class',
            summary: 'ලකුණු දීමේ පටිපාටිය (Marking Scheme) අනුව පිළිතුරු විශ්ලේෂණය.'
          }
        ]
      }
    ]
  }
];

const INITIAL_STUDENT_PROFILE = {
  name: 'කවිඳු දේශාන් (Kavindu Deshan)',
  studentId: 'ST-2027-8841',
  batch: '2027 A/L',
  phone: '077 123 4567',
  email: 'kavindu@gmail.com',
  address: 'නො. 45, ප්‍රධාන වීදිය, මහනුවර',
  rewardPoints: 340,
  referralCode: 'PRV2027KAV'
};

const INITIAL_ASSIGNMENTS = [
  {
    id: 'asgn-101',
    title: '2027 A/L Essay Test 01 - අනුරාධපුර රාජධානියේ වාරි තාක්ෂණය',
    courseName: '2027 A/L History - Paper Class',
    deadline: '2027-11-20',
    submitted: true,
    pdfFileName: 'Kavindu_Anuradhapura_Essay.pdf',
    submissionDate: '2027-11-05',
    status: 'AI Evaluated',
    marks: '82/100',
    aiScore: 82,
    feedback: 'ඉතා හොඳ කරුණු දැක්වීමක්! සෙල්ලිපි මූලාශ්‍ර සාක්ෂි තවදුරටත් එකතු කළේ නම් 90+ සීමාවට ළඟා විය හැක.',
    breakdown: [
      { qNo: 'Q1 (අනුරාධපුර වාරි සංවර්ධනය)', status: 'Correct', modelAnswer: 'පණ්ඩුකාභය, ධාතුසේන සහ මහසෙන් රජවරුන්ගේ වාරි සංකල්ප සවිස්තරව දක්වා ඇත.' },
      { qNo: 'Q2 (සෙල්ලිපි මූලාශ්‍ර සාක්ෂි)', status: 'Partial', modelAnswer: 'තෝනිගල සහ වේවැල්කැටිය සෙල්ලිපි උපුටා දැක්වීම මඟ හැරී ඇත. එය නැවත අධ්‍යයනය කරන්න.' },
      { qNo: 'Q3 (සමාජීය බලපෑම)', status: 'Correct', modelAnswer: 'ග්‍රාමීය කෘෂිකාර්මික පදනම සහ ස්වයංපෝෂිත ආර්ථිකය නිවැරදිව දක්වා ඇත.' }
    ]
  }
];

const INITIAL_PENDING_PAYMENTS = [
  {
    id: 'pay-901',
    studentName: 'නිරෝෂන් රණසිංහ (ST-1042)',
    courseTitle: '2027 A/L History - Theory',
    monthName: '2027 දෙසැම්බර් (December Class)',
    amount: 2500,
    paymentMethod: 'Bank Slip Upload',
    slipUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    status: 'Pending Verification',
    courseId: 'c1',
    monthId: 'm-2027-12',
    date: '2027-11-02'
  }
];

// Sample MCQ Quiz Questions
const SAMPLE_MCQ_QUIZZES = [
  {
    id: 'q1',
    question: 'අනුරාධපුර රාජධානියේ පළමුවන වාරි අමුණ ඉදිකරන ලද්දේ කුමන රජු සමයේදී ද?',
    options: ['පණ්ඩුකාභය රජු', 'දෙවන පෑතිස් රජු', 'මහසෙන් රජු', 'ධාතුසේන රජු'],
    correct: 0,
    explanation: 'පණ්ඩුකාභය රජතුමා විසින් අභය වැව (බසවක්කුලම) ඉදිකරන ලදී.'
  },
  {
    id: 'q2',
    question: 'සීගිරිය පර්වත මාලිගය ඉදි කරන ලද්දේ කුමන රජු විසින් ද?',
    options: ['කාශ්‍යප රජු', 'ධාතුසේන රජු', 'මොගල්ලාන් රජු', 'විජය රජු'],
    correct: 0,
    explanation: 'පළමුවන කාශ්‍යප රජතුමා (ක්‍රි.ව. 477 - 495) සීගිරිය අගනුවර කරගනිමින් මාලිගය ඉදි කළේය.'
  }
];

// Sample Audio Podcasts
const INITIAL_PODCASTS = [
  {
    id: 'pod1',
    title: 'Episode 01: මහවංශය සහ ඓතිහාසික මූලාශ්‍ර සාරාංශය (15 Mins)',
    duration: '14:25',
    category: 'Theory Audio',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/daytime_forest_bonfire.ogg'
  },
  {
    id: 'pod2',
    title: 'Episode 02: අනුරාධපුර යුගයේ වාරි තාක්ෂණික විශේෂතා (12 Mins)',
    duration: '11:50',
    category: 'Revision Audio',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/daytime_forest_bonfire.ogg'
  }
];

// Leaderboard Top Students
const INITIAL_LEADERBOARD = [
  { rank: 1, name: 'දිල්ෂාන් මධුසංඛ (2027 A/L)', score: '98/100', batch: '2027 A/L' },
  { rank: 2, name: 'කවිඳු දේශාන් (ඔබ)', score: '82/100', batch: '2027 A/L' },
  { rank: 3, name: 'චමෝදි නිසංසලා (2027 A/L)', score: '79/100', batch: '2027 A/L' },
  { rank: 4, name: 'මධුෂාන් ප්‍රනාන්දු (2028 A/L)', score: '76/100', batch: '2028 A/L' }
];

// 1. INITIAL ATTENDANCE & BADGE CONFIG
const INITIAL_ATTENDANCE_CONFIG = {
  autoTrackZoom: true,
  badgeThreshold: 80,
  badgeTitle: 'A* Regular Attendance Honor Certificate',
  badgeMessage: 'Awarded for maintaining exemplary live class attendance in Praveen Suranjana A/L History Academy.',
  totalSessionsHeld: 10
};

const INITIAL_ATTENDANCE_LOGS = [
  { id: 'att-1', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '01. මූලාශ්‍ර අධ්‍යයනය Live Zoom', date: '2027-11-01', status: 'Present' },
  { id: 'att-2', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '02. අනුරාධපුර රාජධානිය Live Zoom', date: '2027-11-08', status: 'Present' },
  { id: 'att-3', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '03. වාරි ශිෂ්ටාචාරය Live Zoom', date: '2027-11-15', status: 'Present' },
  { id: 'att-4', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '04. පොළොන්නරු යුගය Live Zoom', date: '2027-11-22', status: 'Present' },
  { id: 'att-5', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '05. සීගිරි කලා ශිල්ප Live Zoom', date: '2027-11-29', status: 'Present' },
  { id: 'att-6', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '06. ආදර්ශ ප්‍රශ්න පත්‍ර සාකච්ඡාව', date: '2027-12-05', status: 'Present' },
  { id: 'att-7', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '07. ලෝක ඉතිහාසය - පුනරුදය', date: '2027-12-12', status: 'Present' },
  { id: 'att-8', studentId: 'ST-2027-8841', studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '08. කාර්මික විප්ලවය Live', date: '2027-12-19', status: 'Absent' },
  { id: 'att-9', studentId: 'ST-1042', studentName: 'නිරෝෂන් රණසිංහ (ST-1042)', sessionTitle: '08. කාර්මික විප්ලවය Live', date: '2027-12-19', status: 'Present' }
];

// 2. INITIAL SMS & WHATSAPP NOTIFICATION CONFIG & LOGS
const INITIAL_NOTIFICATION_CONFIG = {
  whatsappNumber: '+94 77 890 1234',
  smsSenderId: 'PRV-HISTORY',
  autoSendOnSlipApproval: true,
  autoSendOnNewLiveClass: true,
  slipApprovedTemplate: 'ආයුබෝවන් {studentName}! ඔබගේ {monthName} පන්ති ගාස්තු රිසිට්පත අනුමත විය. දැන් LMS හරහා පාඩම් නැරඹිය හැක.',
  liveClassTemplate: 'මතක් කිරීමයි {studentName}! අද සජීවී Zoom පන්තිය ({classTitle}) ආරම්භ වේ. Link: {zoomLink}'
};

const INITIAL_NOTIFICATIONS = [
  {
    id: 'notif-1',
    channel: 'WhatsApp',
    recipient: '077 123 4567',
    title: 'Class Unlocked • පන්ති අගුළු හරින ලදී',
    message: 'ආයුබෝවන් කවිඳු දේශාන්! ඔබගේ 2027 නොවැම්බර් පන්ති ගාස්තු රිසිට්පත අනුමත විය.',
    time: '10 mins ago',
    read: false
  },
  {
    id: 'notif-2',
    channel: 'SMS',
    recipient: '077 123 4567',
    title: 'Live Zoom Reminder',
    message: 'මතක් කිරීමයි! 2027 A/L ඉතිහාසය විශේෂ මූලාශ්‍ර සාකච්ඡාව සඳහා Zoom හරහා සම්බන්ධ වන්න.',
    time: '2 hours ago',
    read: true
  }
];

// 3. INITIAL Q&A DISCUSSION FORUM DATA
const INITIAL_FORUM_POSTS = [
  {
    id: 'qa-1',
    studentName: 'කවිඳු දේශාන් (2027 A/L)',
    lessonTag: '01. Primary Sources of Sri Lankan History',
    question: 'සර්, මහාවංශයේ පළමු කොටස රචනා කිරීමේදී මහානාම හිමියන් භාවිතා කළ පැරණි මූලාශ්‍ර මොනවාද? රචනා ප්‍රශ්නයකට එය කෙසේ ගොනු කළ යුතුද?',
    timestamp: '2027-11-10 04:30 PM',
    upvotes: 14,
    pinned: true,
    teacherReply: 'ඉතා හොඳ ප්‍රශ්නයක් කවිඳු! සීහළට්ඨකථා මහාවංශය, දීපවංශය සහ උත්තර විහාර අට්ඨකථාව ප්‍රධාන මූලාශ්‍ර වේ. රචනා ප්‍රශ්නයේදී කරුණු 3ක් යටතේ සෙල්ලිපි සාක්ෂි සමඟ සසඳා ලියන්න.'
  },
  {
    id: 'qa-2',
    studentName: 'චමෝදි නිසංසලා (2027 A/L)',
    lessonTag: '03. Anuradhapura Kingdom & Water Civilization',
    question: 'බිසෝකොටුවේ ක්‍රියාකාරීත්වය පිළිබඳ කෙටි සටහනක් ලියන විට වර්තමාන ඉංජිනේරු විද්‍යාව හා සැසඳීම අවශ්‍යද?',
    timestamp: '2027-11-12 08:15 PM',
    upvotes: 9,
    pinned: false,
    teacherReply: ''
  }
];

// 4. INITIAL TIMED MOCK EXAMS DATA
const INITIAL_MOCK_EXAMS = [
  {
    id: 'exam-1',
    title: '2027 A/L Monthly Timed Mock Exam 01 - අනුරාධපුර යුගය',
    batch: '2027 A/L',
    durationMinutes: 15,
    isActive: true,
    description: 'නියමිත කාලය (විනාඩි 15) ඇතුළත පිළිතුරු සපයන්න. කාලය අවසන් වූ විට ස්වයංක්‍රීයව Submit වේ.',
    questions: [
      {
        id: 'eq-1',
        question: 'අනුරාධපුරය අගනුවර බවට පත් කරමින් විධිමත් නගර සැලසුමක් ඇති කළ පළමු පාලකයා කවුද?',
        options: ['පණ්ඩුකාභය රජු', 'විජය රජු', 'දේවානම්පියතිස්ස රජු', 'දුටුගැමුණු රජු'],
        correct: 0,
        explanation: 'පණ්ඩුකාභය රජතුමා විසින් අනුරාධපුරය විධිමත් අගනුවරක් ලෙස සංවර්ධනය කරන ලදී.'
      },
      {
        id: 'eq-2',
        question: 'මින්නේරිය වැව ඉදිකිරීම නිසා "මින්නේරි දෙවියන්" ලෙස ජනතාවගේ ගෞරවයට පාත්‍ර වූ රජු කවුද?',
        options: ['ධාතුසේන රජු', 'මහසෙන් රජු', 'වසභ රජු', 'පළමුවන පරාක්‍රමබාහු රජු'],
        correct: 1,
        explanation: 'මහසෙන් රජතුමා විසින් මින්නේරිය ඇතුළු මහා වැව් 16ක් ඉදිකරන ලදී.'
      },
      {
        id: 'eq-3',
        question: 'ශ්‍රී ලංකාවේ පැරණිතම බ්‍රාහ්මී සෙල්ලිපි බහුලව හමුවන්නේ කුමන ස්ථාන ආශ්‍රිතවද?',
        options: ['පැරණි වාරි වේලි අසල', 'භික්ෂූන් වහන්සේලාට පූජා කළ ගල් ලෙන් වල', 'රජ මාලිගා පිවිසුම් වල', 'වෙළඳ වරායන්හි'],
        correct: 1,
        explanation: 'සංඝයා වහන්සේලා උදෙසා ලෙන් පූජා කිරීම සඳහන් කරමින් කටාරම් කොටා ලියූ ලෙන් ලිපි පැරණිතම වේ.'
      }
    ]
  },
  {
    id: 'exam-2',
    title: '2028 A/L Foundation Timed Test - ඓතිහාසික මූලාශ්‍ර',
    batch: '2028 A/L',
    durationMinutes: 10,
    isActive: true,
    description: '2028 A/L සිසුන් සඳහා මූලාශ්‍ර පාඩම ඇසුරෙන් සැකසූ කාල සීමා සහිත පරීක්ෂණය.',
    questions: [
      {
        id: 'eq-201',
        question: 'පහත සඳහන් කෘති අතරින් ශ්‍රී ලංකාවේ පැරණිතම වංශකතාව කුමක්ද?',
        options: ['මහාවංශය', 'දීපවංශය', 'චූලවංශය', 'රාජාවලිය'],
        correct: 1,
        explanation: 'ක්‍රි.ව. 4 වන සියවසේදී රචිත දීපවංශය පැරණිතම පාලි වංශකතාවයි.'
      }
    ]
  }
];

// 5. INITIAL STUDENT PROGRESS CHART METRICS (EDITABLE BY ADMIN)
const INITIAL_PROGRESS_METRICS = {
  targetBenchmark: 85,
  teacherRemark: 'කවිඳුගේ මාසික ලකුණු වර්ධනය ඉතා සතුටුදායකයි. සෙල්ලිපි මූලාශ්‍ර සහ ලෝක ඉතිහාසය කොටස් තවදුරටත් පුනරීක්ෂණය කරන්න.',
  monthlyScores: [
    { month: 'July', score: 64, lessonsCompleted: 6 },
    { month: 'Aug', score: 71, lessonsCompleted: 9 },
    { month: 'Sep', score: 75, lessonsCompleted: 12 },
    { month: 'Oct', score: 79, lessonsCompleted: 15 },
    { month: 'Nov', score: 85, lessonsCompleted: 18 }
  ],
  topicMastery: [
    { topic: 'ඓතිහාසික මූලාශ්‍ර (Sources)', mastery: 90 },
    { topic: 'අනුරාධපුර වාරි ශිෂ්ටාචාරය', mastery: 84 },
    { topic: 'පොළොන්නරු රාජධානිය', mastery: 76 },
    { topic: 'යුරෝපා පුනරුදය (World History)', mastery: 68 }
  ]
};

export default function App() {
  const [theme, setTheme] = useState('dark'); // 'dark' | 'light'

  // Inject Modern Google Fonts (Plus Jakarta Sans for crisp English + Noto Sans Sinhala for clean Sinhala)
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);
  
  // Auth Gateway States
  const [authViewMode, setAuthViewMode] = useState('login'); // 'login' | 'register'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [regForm, setRegForm] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    batch: '2027 A/L'
  });
  const [regSuccessMsg, setRegSuccessMsg] = useState('');

  const [role, setRole] = useState('student'); // 'student' | 'admin'
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminPinSecret] = useState('1234');
  const [showAdminAuthModal, setShowAdminAuthModal] = useState(false);
  const [authError, setAuthError] = useState('');

  // Developer Tool Separate Password Auth & State
  const [isDevAuthenticated, setIsDevAuthenticated] = useState(false);
  const [devPinInput, setDevPinInput] = useState('');
  const [devPinSecret] = useState('9999'); // Separate Dev Password
  const [showDevAuthModal, setShowDevAuthModal] = useState(false);
  const [devAuthError, setDevAuthError] = useState('');

  const [activeTab, setActiveTab] = useState('dashboard'); 
  // Student tabs: 'dashboard', 'courses', 'quiz', 'timed-exams', 'forum', 'podcasts', 'assignments', 'profile'
  // Admin tabs: 'admin-dash', 'admin-analytics', 'admin-evaluator', 'admin-exams', 'admin-attendance', 'admin-forum', 'admin-notifications', 'admin-payments', 'admin-courses'

  // Master States
  const [heroBanner, setHeroBanner] = useState(INITIAL_HERO_BANNER);
  const [courses, setCourses] = useState(INITIAL_COURSES);
  const [studentProfile, setStudentProfile] = useState(INITIAL_STUDENT_PROFILE);
  const [assignments, setAssignments] = useState(INITIAL_ASSIGNMENTS);
  const [pendingPayments, setPendingPayments] = useState(INITIAL_PENDING_PAYMENTS);
  const [podcasts, setPodcasts] = useState(INITIAL_PODCASTS);
  const [leaderboard, setLeaderboard] = useState(INITIAL_LEADERBOARD);

  // Admin New Podcast Form State
  const [newPodcastForm, setNewPodcastForm] = useState({
    title: '',
    duration: '10:00 Mins',
    category: 'Theory Audio',
    audioUrl: 'https://actions.google.com/sounds/v1/ambiences/daytime_forest_bonfire.ogg'
  });
  const [podcastAddedMsg, setPodcastAddedMsg] = useState('');

  // ==========================================
  // NEW 5 FEATURES STATES (STUDENT + ADMIN EDITABLE)
  // ==========================================
  // 1. Attendance & Badge States
  const [attendanceConfig, setAttendanceConfig] = useState(INITIAL_ATTENDANCE_CONFIG);
  const [attendanceLogs, setAttendanceLogs] = useState(INITIAL_ATTENDANCE_LOGS);
  const [showBadgeModal, setShowBadgeModal] = useState(false);
  const [newAttendanceEntry, setNewAttendanceEntry] = useState({ studentName: 'කවිඳු දේශාන් (Kavindu Deshan)', sessionTitle: '', status: 'Present' });

  // 2. SMS & WhatsApp Notification States
  const [notificationConfig, setNotificationConfig] = useState(INITIAL_NOTIFICATION_CONFIG);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [showNotifDrawer, setShowNotifDrawer] = useState(false);
  const [broadcastForm, setBroadcastForm] = useState({ channel: 'WhatsApp', title: '', message: '' });
  const [broadcastSentToast, setBroadcastSentToast] = useState('');

  // 3. Q&A Discussion Forum States
  const [forumPosts, setForumPosts] = useState(INITIAL_FORUM_POSTS);
  const [newForumQuestion, setNewForumQuestion] = useState({ lessonTag: '01. Primary Sources of Sri Lankan History', question: '' });
  const [adminReplyDrafts, setAdminReplyDrafts] = useState({});

  // 4. Timed Mock Exams States
  const [mockExams, setMockExams] = useState(INITIAL_MOCK_EXAMS);
  const [activeExamSession, setActiveExamSession] = useState(null); // { exam, answers: {}, timeLeftSeconds, submitted: false, score: 0 }
  const [selectedAdminExamId, setSelectedAdminExamId] = useState(INITIAL_MOCK_EXAMS[0].id);
  const [newExamForm, setNewExamForm] = useState({ title: '', batch: '2027 A/L', durationMinutes: 15, description: '' });
  const [newExamQuestionForm, setNewExamQuestionForm] = useState({ question: '', opt0: '', opt1: '', opt2: '', opt3: '', correct: 0, explanation: '' });

  // 5. Interactive Student Progress Metrics (Editable by Admin)
  const [progressMetrics, setProgressMetrics] = useState(INITIAL_PROGRESS_METRICS);

  // Live Zoom Class State (Editable by Admin/Teacher!)
  const [liveZoomConfig, setLiveZoomConfig] = useState({
    title: '2027 A/L ඉතිහාසය - විශේෂ මූලාශ්‍ර සාකච්ඡාව',
    zoomUrl: 'https://zoom.us/j/123456789',
    targetDateTime: new Date(Date.now() + 3 * 3600 * 1000 + 42 * 60 * 1000).toISOString().slice(0, 16),
    isActive: true
  });
  const [zoomCountdown, setZoomCountdown] = useState({ hours: 3, minutes: 42, seconds: 15 });
  const [isEditingZoom, setIsEditingZoom] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(liveZoomConfig.targetDateTime).getTime() - Date.now();
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setZoomCountdown({ hours, minutes, seconds });
      } else {
        setZoomCountdown({ hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [liveZoomConfig.targetDateTime]);

  // MCQ Quiz Interactive State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Audio Podcast Player State
  const [playingPodcast, setPlayingPodcast] = useState(null);

  // Developer Multi-Teacher Profiles & Active Profile State
  const [teacherProfiles, setTeacherProfiles] = useState(INITIAL_TEACHER_PROFILES);
  const [activeTeacherProfileId, setActiveTeacherProfileId] = useState('tp-praveen');
  const [showNewTeacherModal, setShowNewTeacherModal] = useState(false);
  const [newTeacherForm, setNewTeacherForm] = useState({
    appName: '',
    tagline: '',
    teacherName: '',
    subjectName: '',
    primaryColor: '#0ea5e9',
    secondaryColor: '#6366f1',
    monthlyFeeDue: 'Rs. 15,000/='
  });

  // Derived active teacher configuration
  const activeTeacherProfile = teacherProfiles.find(p => p.id === activeTeacherProfileId) || teacherProfiles[0];
  const isSystemActive = activeTeacherProfile.isSystemActive;
  const serviceFeeStatus = activeTeacherProfile.serviceFeeStatus;
  const lmsBrandConfig = activeTeacherProfile;

  // Helper to update the currently active teacher profile
  const updateActiveTeacherProfile = (updates) => {
    setTeacherProfiles(prev => prev.map(p => 
      p.id === activeTeacherProfileId ? { ...p, ...updates } : p
    ));
  };

  // Helper to toggle suspension for any teacher profile in the Developer list
  const toggleTeacherProfileSuspension = (profileId) => {
    setTeacherProfiles(prev => prev.map(p => {
      if (p.id === profileId) {
        const nextActive = !p.isSystemActive;
        return {
          ...p,
          isSystemActive: nextActive,
          serviceFeeStatus: nextActive ? 'Paid' : 'Unpaid - Suspended'
        };
      }
      return p;
    }));
  };

  // Create new teacher profile in Developer Studio
  const handleCreateTeacherProfile = (e) => {
    e.preventDefault();
    const newId = 'tp-' + Date.now();
    const created = {
      id: newId,
      appName: newTeacherForm.appName || 'New Academy LMS',
      tagline: newTeacherForm.tagline || '2027 & 2028 A/L Online Academy',
      teacherName: newTeacherForm.teacherName || 'Teacher Name',
      subjectName: newTeacherForm.subjectName || 'A/L Subject',
      primaryColor: newTeacherForm.primaryColor,
      secondaryColor: newTeacherForm.secondaryColor,
      themePresetName: 'Custom Skin',
      footerText: `© 2026 EduPrime LMS • ${newTeacherForm.appName || 'Academy'}.`,
      isSystemActive: true,
      serviceFeeStatus: 'Paid',
      monthlyFeeDue: newTeacherForm.monthlyFeeDue || 'Rs. 15,000/=',
      nextBillingDate: '2026-12-15'
    };
    setTeacherProfiles(prev => [...prev, created]);
    setActiveTeacherProfileId(newId);
    setShowNewTeacherModal(false);
    setNewTeacherForm({
      appName: '',
      tagline: '',
      teacherName: '',
      subjectName: '',
      primaryColor: '#0ea5e9',
      secondaryColor: '#6366f1',
      monthlyFeeDue: 'Rs. 15,000/='
    });
  };

  // Modals & Active Selections
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activePdfViewerModal, setActivePdfViewerModal] = useState(null);
  
  const [paymentModal, setPaymentModal] = useState(null);
  const [paymentSuccessMsg, setPaymentSuccessMsg] = useState('');
  const [bankSlipFile, setBankSlipFile] = useState(null);

  // Student PDF Upload State
  const [uploadPdfFile, setUploadPdfFile] = useState(null);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState('');

  // AI Paper Evaluator Engine in Admin
  const [selectedPaperForAI, setSelectedPaperForAI] = useState(assignments[0]);
  const [adminMarkingSchemePdf, setAdminMarkingSchemePdf] = useState(null);
  const [isEvaluatingAI, setIsEvaluatingAI] = useState(false);
  const [aiResultGenerated, setAiResultGenerated] = useState(null);

  // Admin Brand & Banner Modals
  const [isEditingBanner, setIsEditingBanner] = useState(false);
  const [bannerFormData, setBannerFormData] = useState(INITIAL_HERO_BANNER);

  // Unified All-In-One Class Creator & Edit Form State
  const [showAddClassModal, setShowAddClassModal] = useState(false);
  const [editingCourseId, setEditingCourseId] = useState(null);
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(null);
  const [newClassFormData, setNewClassFormData] = useState({
    batchYear: '2027 A/L',
    category: 'Theory',
    monthName: '2027 දෙසැම්බර් (December Class)',
    courseTitle: '',
    lessonTitle: '',
    duration: '2 Hours 30 Mins',
    feePerMonth: 2500,
    videoPlatform: 'YouTube',
    videoUrl: '',
    hasPdf: false,
    pdfFileName: '',
    pdfFileUrl: '',
    color1: '#0f172a',
    color2: '#7c3aed',
    summary: 'විෂය නිර්දේශයේ අදාළ පරිච්ඡේදයේ සියලුම අනුකොටස් සවිස්තරව.'
  });

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [batchFilter, setBatchFilter] = useState('All');

  // Overall Calculated Metrics
  const allUnlockedLessons = courses.flatMap(c => 
    c.monthlyModules.filter(m => m.isPaid).flatMap(m => m.lessons)
  );
  const totalUnlocked = allUnlockedLessons.length;
  const completedCount = allUnlockedLessons.filter(l => l.completed).length;
  const overallPercentage = totalUnlocked > 0 ? Math.round((completedCount / totalUnlocked) * 100) : 0;

  // Calculated Student Attendance %
  const studentAttendanceRecords = attendanceLogs.filter(log => log.studentName.includes('කවිඳු') || log.studentId === studentProfile.studentId);
  const presentSessionsCount = studentAttendanceRecords.filter(l => l.status === 'Present').length;
  const attendancePercentage = attendanceConfig.totalSessionsHeld > 0
    ? Math.min(100, Math.round((presentSessionsCount / attendanceConfig.totalSessionsHeld) * 100))
    : 0;
  const isBadgeUnlocked = attendancePercentage >= attendanceConfig.badgeThreshold;

  // Timed Mock Exam Countdown Effect
  useEffect(() => {
    if (!activeExamSession || activeExamSession.submitted) return;
    const interval = setInterval(() => {
      setActiveExamSession(prev => {
        if (!prev || prev.submitted) return prev;
        if (prev.timeLeftSeconds <= 1) {
          // Auto-submit when timer hits 0
          let correctCount = 0;
          prev.exam.questions.forEach((q, idx) => {
            if (prev.answers[idx] === q.correct) correctCount++;
          });
          setStudentProfile(sp => ({ ...sp, rewardPoints: sp.rewardPoints + correctCount * 15 }));
          return { ...prev, timeLeftSeconds: 0, submitted: true, score: correctCount };
        }
        return { ...prev, timeLeftSeconds: prev.timeLeftSeconds - 1 };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [activeExamSession?.submitted, activeExamSession?.exam?.id]);

  // Handle Join Zoom Live + Auto Attendance Logging
  const handleJoinZoomLive = () => {
    if (attendanceConfig.autoTrackZoom) {
      const alreadyLogged = attendanceLogs.some(
        log => log.sessionTitle === liveZoomConfig.title && (log.studentId === studentProfile.studentId || log.studentName.includes('කවිඳු'))
      );
      if (!alreadyLogged) {
        const newLog = {
          id: 'att-' + Date.now(),
          studentId: studentProfile.studentId,
          studentName: studentProfile.name,
          sessionTitle: liveZoomConfig.title,
          date: new Date().toISOString().split('T')[0],
          status: 'Present'
        };
        setAttendanceLogs(prev => [newLog, ...prev]);
        setStudentProfile(prev => ({ ...prev, rewardPoints: prev.rewardPoints + 25 }));
      }
    }
  };

  // Handle Admin Auth
  const handleAdminAuthSubmit = (e) => {
    e.preventDefault();
    if (adminPinInput === adminPinSecret) {
      setIsDevAuthenticated(false);
      setIsAdminAuthenticated(true);
      setRole('admin');
      setIsLoggedIn(true);
      setActiveTab('admin-dash');
      setShowAdminAuthModal(false);
      setAdminPinInput('');
      setAuthError('');
    } else {
      setAuthError('වැරදි ඇඩ්මින් PIN අංකයකි! (Secret PIN: 1234)');
    }
  };

  // Handle Developer Tool Auth Submit (Separate PIN: 9999)
  const handleDevAuthSubmit = (e) => {
    e.preventDefault();
    if (devPinInput === devPinSecret) {
      setIsDevAuthenticated(true);
      setIsLoggedIn(true);
      setActiveTab('dev-tools');
      setShowDevAuthModal(false);
      setDevPinInput('');
      setDevAuthError('');
    } else {
      setDevAuthError('වැරදි ඩිවලොපර් PIN අංකයකි! (Dev PIN: 9999)');
    }
  };

  // Apply Multi-Teacher Theme Preset in Developer Studio
  const handleApplyThemeSkin = (skin) => {
    updateActiveTeacherProfile({
      primaryColor: skin.primary,
      secondaryColor: skin.secondary,
      themePresetName: skin.name
    });
  };

  // Handle Student Login
  const handleStudentLogin = (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      setLoginError('කරුණාකර ඊමේල් ලිපිනය සහ මුරපදය ඇතුළත් කරන්න.');
      return;
    }
    setIsLoggedIn(true);
    setRole('student');
    setActiveTab('dashboard');
    setLoginError('');
  };

  // Handle Student Registration
  const handleStudentRegister = (e) => {
    e.preventDefault();
    if (!regForm.name || !regForm.email || !regForm.password || !regForm.address || !regForm.phone) {
      setLoginError('කරුණාකර සියලුම විස්තර සහ ලිපිනය නිවැරදිව පුරවන්න.');
      return;
    }

    setStudentProfile({
      name: regForm.name,
      studentId: 'ST-' + Math.floor(1000 + Math.random() * 9000),
      batch: regForm.batch,
      phone: regForm.phone,
      email: regForm.email,
      address: regForm.address,
      rewardPoints: 400, // Bonus registration reward points
      referralCode: 'PRV' + Math.floor(100 + Math.random() * 900) + 'KAV'
    });

    setRegSuccessMsg('ගිණුම සාර්ථකව සාදන ලදී! බෝනස් ළකුණු 400ක් හිමි විය.');
    setTimeout(() => {
      setRegSuccessMsg('');
      setAuthViewMode('login');
    }, 2500);
  };

  // Student Payment Submit (BANK SLIP ONLY - NO CARD PAYMENTS)
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!bankSlipFile) return;

    const newPaymentReq = {
      id: 'pay-' + Date.now(),
      studentName: studentProfile.name,
      courseTitle: paymentModal.course.title,
      monthName: paymentModal.monthModule.monthName,
      amount: paymentModal.course.feePerMonth,
      paymentMethod: 'Bank Slip Upload',
      slipUrl: URL.createObjectURL(bankSlipFile),
      status: 'Pending Verification',
      courseId: paymentModal.course.id,
      monthId: paymentModal.monthModule.monthId,
      date: new Date().toISOString().split('T')[0]
    };

    setPendingPayments(prev => [newPaymentReq, ...prev]);
    setPaymentSuccessMsg('බැංකු රිසිට්පත සාර්ථකව යොමු කරන ලදී! ඇඩ්මින් තහවුරු කළ පසු පාඩම් අගුළු හැරේ.');
    setTimeout(() => {
      setPaymentSuccessMsg('');
      setPaymentModal(null);
      setBankSlipFile(null);
    }, 2500);
  };

  // Student PDF Upload Handler
  const handleStudentPdfUpload = (e) => {
    e.preventDefault();
    if (!uploadPdfFile) return;
    const newAsgn = {
      id: 'asgn-' + Date.now(),
      title: '2027 A/L Model Paper Essay Submission',
      courseName: '2027 A/L History - Paper Class',
      deadline: '2027-12-30',
      submitted: true,
      pdfFileName: uploadPdfFile.name,
      submissionDate: new Date().toISOString().split('T')[0],
      status: 'AI Evaluated',
      marks: '85/100',
      aiScore: 85,
      feedback: 'ඉතා විශිෂ්ට පිළිතුරකි! මූලාශ්‍ර සාක්ෂි සහ ඓතිහාසික විශ්ලේෂණය නිවැරදිව ගොනු කර ඇත.',
      breakdown: [
        { qNo: 'Q1 (විෂය විශ්ලේෂණය)', status: 'Correct', modelAnswer: 'සියලුම ප්‍රධාන කරුණු සවිස්තරව දක්වා ඇත.' },
        { qNo: 'Q2 (මූලාශ්‍ර සාක්ෂි)', status: 'Correct', modelAnswer: 'සෙල්ලිපි සහ වංශකතා සාක්ෂි නිවැරදිව උපුටා දක්වා ඇත.' }
      ]
    };
    setAssignments(prev => [newAsgn, ...prev]);
    setUploadSuccessMsg('පිළිතුරු පත්‍රය සාර්ථකව යොමු කරන ලදී! AI Marking සාර්ථකයි.');
    setTimeout(() => setUploadSuccessMsg(''), 3000);
    setUploadPdfFile(null);
  };

  // AI Paper Evaluator Engine Run Handler
  const handleRunAIEvaluation = () => {
    setIsEvaluatingAI(true);
    setTimeout(() => {
      setIsEvaluatingAI(false);
      setAiResultGenerated({
        marks: '88/100',
        feedback: 'ළමයාගේ පිළිතුරු පත්‍රය Marking Scheme එක සමඟ 92% ක් ගැළපේ. ඉතා පැහැදිලි අත්අකුරු සහ නිවැරදි ඉතිහාස කරුණු.',
        breakdown: [
          { qNo: 'Q1 (මූලාශ්‍ර සාක්ෂි විමර්ශනය)', status: 'Correct', modelAnswer: 'මහාවංශය සහ සෙල්ලිපි සාක්ෂි නිවැරදිව සංසන්දනය කර ඇත.' },
          { qNo: 'Q2 (වාරි ශිෂ්ටාචාරය)', status: 'Correct', modelAnswer: 'වැව් සහ ඇළ මාර්ග පද්ධතියේ තාක්ෂණික ලක්ෂණ සවිස්තරව දක්වා ඇත.' }
        ]
      });
    }, 2000);
  };

  // Admin Approve Payment Slip (+ Auto WhatsApp/SMS Notification)
  const handleApprovePayment = (payReq) => {
    setCourses(courses.map(c => {
      if (c.id === payReq.courseId) {
        const updatedModules = c.monthlyModules.map(m => 
          m.monthId === payReq.monthId ? { ...m, isPaid: true } : m
        );
        return { ...c, monthlyModules: updatedModules };
      }
      return c;
    }));
    setPendingPayments(pendingPayments.map(p => p.id === payReq.id ? { ...p, status: 'Approved' } : p));

    if (notificationConfig.autoSendOnSlipApproval) {
      const formattedMsg = notificationConfig.slipApprovedTemplate
        .replace('{studentName}', payReq.studentName)
        .replace('{monthName}', payReq.monthName);
      setNotifications(prev => [{
        id: 'notif-' + Date.now(),
        channel: 'WhatsApp',
        recipient: studentProfile.phone,
        title: 'Auto-Alert: Bank Slip Approved ✓',
        message: formattedMsg,
        time: 'Just now',
        read: false
      }, ...prev]);
    }
  };

  // Admin Send Broadcast WhatsApp/SMS Notification
  const handleSendBroadcastNotification = (e) => {
    e.preventDefault();
    if (!broadcastForm.message.trim()) return;
    const newNotif = {
      id: 'notif-' + Date.now(),
      channel: broadcastForm.channel,
      recipient: 'All Active Students (2027 & 2028 A/L)',
      title: broadcastForm.title || `${broadcastForm.channel} Announcement`,
      message: broadcastForm.message,
      time: 'Just now',
      read: false
    };
    setNotifications(prev => [newNotif, ...prev]);
    setBroadcastForm({ ...broadcastForm, title: '', message: '' });
    setBroadcastSentToast(`${broadcastForm.channel} පණිවුඩය සියලුම සිසුන් වෙත සාර්ථකව යොමු කරන ලදී!`);
    setTimeout(() => setBroadcastSentToast(''), 3000);
  };

  // Student Post Question in Forum
  const handlePostForumQuestion = (e) => {
    e.preventDefault();
    if (!newForumQuestion.question.trim()) return;
    const created = {
      id: 'qa-' + Date.now(),
      studentName: `${studentProfile.name} (${studentProfile.batch})`,
      lessonTag: newForumQuestion.lessonTag,
      question: newForumQuestion.question,
      timestamp: new Date().toLocaleString(),
      upvotes: 1,
      pinned: false,
      teacherReply: ''
    };
    setForumPosts(prev => [created, ...prev]);
    setNewForumQuestion({ ...newForumQuestion, question: '' });
  };

  // Admin Save Teacher Reply in Forum
  const handleAdminSaveForumReply = (postId) => {
    const replyText = adminReplyDrafts[postId];
    if (replyText === undefined) return;
    setForumPosts(prev => prev.map(p => p.id === postId ? { ...p, teacherReply: replyText } : p));
  };

  // Start Timed Mock Exam for Student
  const handleStartTimedExam = (exam) => {
    setActiveExamSession({
      exam,
      answers: {},
      timeLeftSeconds: exam.durationMinutes * 60,
      submitted: false,
      score: 0
    });
  };

  // Manual Submit Timed Mock Exam
  const handleSubmitTimedExam = () => {
    if (!activeExamSession) return;
    let correctCount = 0;
    activeExamSession.exam.questions.forEach((q, idx) => {
      if (activeExamSession.answers[idx] === q.correct) correctCount++;
    });
    setStudentProfile(sp => ({ ...sp, rewardPoints: sp.rewardPoints + correctCount * 15 }));
    setActiveExamSession({
      ...activeExamSession,
      submitted: true,
      score: correctCount
    });
  };

  // Save Banner Changes
  const handleSaveBanner = (e) => {
    e.preventDefault();
    setHeroBanner(bannerFormData);
    setIsEditingBanner(false);
  };

  // Handle PDF Select in Unified Class Creator Form
  const handleAdminPdfUploadInClassCreator = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewClassFormData({
        ...newClassFormData,
        hasPdf: true,
        pdfFileName: file.name,
        pdfFileUrl: URL.createObjectURL(file)
      });
    }
  };

  // Open Edit Class Modal
  const handleOpenEditClass = (course) => {
    setEditingCourseId(course.id);
    const firstModule = course.monthlyModules[0];
    const firstLesson = firstModule?.lessons[0];
    setNewClassFormData({
      batchYear: course.batchYear || '2027 A/L',
      category: course.category || 'Theory',
      monthName: firstModule ? firstModule.monthName : '2027 දෙසැම්බර් (December Class)',
      courseTitle: course.title || '',
      lessonTitle: firstLesson ? firstLesson.title : '',
      duration: firstLesson ? firstLesson.duration : '2 Hours 30 Mins',
      feePerMonth: course.feePerMonth || 2500,
      videoPlatform: firstLesson ? firstLesson.videoPlatform : 'YouTube',
      videoUrl: firstLesson ? firstLesson.videoUrl : '',
      hasPdf: firstLesson ? firstLesson.hasPdf : false,
      pdfFileName: firstLesson ? firstLesson.pdfName : '',
      pdfFileUrl: firstLesson ? firstLesson.pdfUrl : '',
      color1: course.color1 || '#0f172a',
      color2: course.color2 || '#7c3aed',
      summary: firstLesson ? firstLesson.summary : 'විෂය නිර්දේශයේ අදාළ පරිච්ඡේදයේ සියලුම අනුකොටස් සවිස්තරව.'
    });
    setShowAddClassModal(true);
  };

  // Delete Course Handler
  const handleDeleteCourse = (courseId) => {
    setConfirmDeleteDialog({
      message: 'මෙම පන්තිය සම්පූර්ණ ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්නද?',
      onConfirm: () => {
        setCourses(prev => prev.filter(c => c.id !== courseId));
        setConfirmDeleteDialog(null);
      }
    });
  };

  // Delete specific lesson from a course module
  const handleDeleteLesson = (courseId, monthId, lessonId) => {
    setConfirmDeleteDialog({
      message: 'මෙම පාඩම/රෙකෝඩින් එක ඉවත් කිරීමට අවශ්‍ය බව තහවුරු කරන්නද?',
      onConfirm: () => {
        setCourses(prev => prev.map(c => {
          if (c.id === courseId) {
            const updatedModules = c.monthlyModules.map(m => {
              if (m.monthId === monthId) {
                return {
                  ...m,
                  lessons: m.lessons.filter(l => l.id !== lessonId)
                };
              }
              return m;
            });
            return { ...c, monthlyModules: updatedModules };
          }
          return c;
        }));
        setConfirmDeleteDialog(null);
      }
    });
  };

  // Submit Unified All-In-One Class Creation / Edit Form
  const handleCreateUnifiedClass = (e) => {
    e.preventDefault();
    const { 
      batchYear, category, monthName, courseTitle, lessonTitle, 
      duration, feePerMonth, videoPlatform, videoUrl, hasPdf, 
      pdfFileName, pdfFileUrl, color1, color2, summary 
    } = newClassFormData;

    let processedVideoUrl = videoUrl;
    if (videoPlatform === 'YouTube' && videoUrl.includes('watch?v=')) {
      processedVideoUrl = videoUrl.replace('watch?v=', 'embed/');
    }

    const newLessonObj = {
      id: 'l-' + Date.now(),
      title: lessonTitle || 'Lesson Topic',
      sinhalaTitle: `${category} - ${lessonTitle || 'පාඩම් මාතෘකාව'}`,
      duration: duration || '2 Hours',
      videoPlatform,
      videoUrl: processedVideoUrl || 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      hasPdf,
      pdfName: pdfFileName || 'Lesson_Tute.pdf',
      pdfUrl: pdfFileUrl || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      completed: false,
      type: category,
      summary: summary || 'අදාළ පාඩමේ විශේෂිත විෂය සටහන්.'
    };

    if (editingCourseId) {
      setCourses(courses.map(c => {
        if (c.id === editingCourseId) {
          return {
            ...c,
            batchYear,
            category,
            title: courseTitle || c.title,
            feePerMonth: Number(feePerMonth),
            color1,
            color2,
            monthlyModules: c.monthlyModules.map((m, idx) => {
              if (idx === 0) {
                return {
                  ...m,
                  monthName,
                  lessons: [newLessonObj, ...m.lessons.slice(1)]
                };
              }
              return m;
            })
          };
        }
        return c;
      }));
    } else {
      const courseIndex = courses.findIndex(c => c.batchYear === batchYear && c.category === category);

      if (courseIndex !== -1) {
        const updatedCourses = [...courses];
        const targetCourse = updatedCourses[courseIndex];
        const monthIndex = targetCourse.monthlyModules.findIndex(m => m.monthName === monthName);

        if (monthIndex !== -1) {
          targetCourse.monthlyModules[monthIndex].lessons.push(newLessonObj);
        } else {
          targetCourse.monthlyModules.push({
            monthId: 'm-' + Date.now(),
            monthName,
            isPaid: false,
            lessons: [newLessonObj]
          });
        }
        setCourses(updatedCourses);
      } else {
        const newCourseObj = {
          id: 'c-' + Date.now(),
          batchYear,
          title: courseTitle || `${batchYear} History - ${category} Masterclass`,
          sinhalaTitle: `${batchYear} උසස් පෙළ ඉතිහාසය - ${category}`,
          instructor: 'Praveen Suranjana (ප්‍රවීන් සුරංජන)',
          category,
          feePerMonth: Number(feePerMonth),
          color1,
          color2,
          description: `${batchYear} සිසුන් සඳහා උසස් පෙළ ඉතිහාසය ${category} පන්තිය.`,
          monthlyModules: [
            {
              monthId: 'm-' + Date.now(),
              monthName,
              isPaid: false,
              lessons: [newLessonObj]
            }
          ]
        };
        setCourses([...courses, newCourseObj]);
      }
    }

    setShowAddClassModal(false);
    setEditingCourseId(null);
    setNewClassFormData({
      batchYear: '2027 A/L',
      category: 'Theory',
      monthName: '2027 දෙසැම්බර් (December Class)',
      courseTitle: '',
      lessonTitle: '',
      duration: '2 Hours 30 Mins',
      feePerMonth: 2500,
      videoPlatform: 'YouTube',
      videoUrl: '',
      hasPdf: false,
      pdfFileName: '',
      pdfFileUrl: '',
      color1: '#0f172a',
      color2: '#7c3aed',
      summary: 'විෂය නිර්දේශයේ අදාළ පරිච්ඡේදයේ සියලුම අනුකොටස් සවිස්තරව.'
    });
  };

  // Filter Courses
  const filteredCourses = courses.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.sinhalaTitle.includes(searchQuery);
    const matchesBatch = batchFilter === 'All' || c.batchYear === batchFilter;
    return matchesSearch && matchesBatch;
  });

  return (
    <div 
      style={{ 
        '--primary-theme': lmsBrandConfig.primaryColor,
        fontFamily: "'Plus Jakarta Sans', 'Noto Sans Sinhala', sans-serif"
      }} 
      className={`min-h-screen transition-colors duration-300 w-full overflow-x-hidden ${
        theme === 'dark' ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-100 text-slate-900'
      }`}
    >

      {/* SYSTEM SUSPENSION OVERLAY IF SERVICE FEE UNPAID OR DISABLED BY DEVELOPER */}
      {(!isSystemActive || serviceFeeStatus === 'Unpaid - Suspended') && role !== 'admin' && !isDevAuthenticated && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 text-center">
          <div className="max-w-md w-full p-6 sm:p-8 rounded-3xl bg-slate-900 border border-red-500/40 shadow-2xl space-y-4">
            <ShieldAlert className="w-16 h-16 text-red-500 mx-auto animate-bounce" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">System Temporarily Suspended</h2>
            <p className="text-xs font-semibold text-red-400">පද්ධතිය තාවකාලිකව අත්හිටුවා ඇත ({lmsBrandConfig.appName})</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              This LMS instance has been temporarily suspended due to pending monthly service fees or license verification. Please contact the system administrator.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAdminAuthModal(true)}
                className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold shadow-lg cursor-pointer"
              >
                Admin Login
              </button>
              <button
                type="button"
                onClick={() => setShowDevAuthModal(true)}
                className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-extrabold shadow-lg cursor-pointer"
              >
                Developer Tool
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGIN / REGISTER GATEWAY */}
      {!isLoggedIn ? (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden bg-[#0b0f19] w-full">
          <div className="absolute inset-0 z-0 opacity-15">
            <img src={heroBanner.photoUrl} alt="Background" className="w-full h-full object-cover filter blur-sm" />
          </div>

          <div className="relative z-10 max-w-md w-full bg-slate-900/95 backdrop-blur-2xl border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Quick Access:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAdminAuthModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/35 hover:bg-amber-500 hover:text-black font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <LockKeyhole className="w-3 h-3" />
                  <span>Admin</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowDevAuthModal(true)}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/35 hover:bg-indigo-600 hover:text-white font-bold transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Key className="w-3 h-3" />
                  <span>Dev Tool</span>
                </button>
              </div>
            </div>

            <div className="text-center space-y-2">
              <div style={{ backgroundColor: lmsBrandConfig.primaryColor }} className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto text-slate-950 shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-extrabold text-white tracking-tight">{lmsBrandConfig.appName}</h1>
              <p style={{ color: lmsBrandConfig.primaryColor }} className="text-xs font-bold">{lmsBrandConfig.tagline}</p>
            </div>

            <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
              <button
                type="button"
                onClick={() => setAuthViewMode('login')}
                style={authViewMode === 'login' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  authViewMode === 'login' ? 'text-slate-950 font-extrabold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Student Login
              </button>
              <button
                type="button"
                onClick={() => setAuthViewMode('register')}
                style={authViewMode === 'register' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                className={`w-1/2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  authViewMode === 'register' ? 'text-slate-950 font-extrabold shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Register Account
              </button>
            </div>

            {loginError && (
              <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-400 text-xs text-center font-bold">
                {loginError}
              </div>
            )}

            {regSuccessMsg && (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs text-center font-bold">
                {regSuccessMsg}
              </div>
            )}

            {authViewMode === 'login' && (
              <form onSubmit={handleStudentLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address (ඊමේල් ලිපිනය):</label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    placeholder="student@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Password (මුරපදය):</label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={e => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                  className="w-full py-3.5 rounded-xl text-slate-950 font-extrabold text-xs shadow-lg transition-all cursor-pointer hover:opacity-90"
                >
                  Sign In to LMS Portal
                </button>
              </form>
            )}

            {authViewMode === 'register' && (
              <form onSubmit={handleStudentRegister} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name (සම්පූර්ණ නම):</label>
                  <input
                    type="text"
                    required
                    value={regForm.name}
                    onChange={e => setRegForm({ ...regForm, name: e.target.value })}
                    placeholder="Kavindu Deshan"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address (ඊමේල් ලිපිනය):</label>
                  <input
                    type="email"
                    required
                    value={regForm.email}
                    onChange={e => setRegForm({ ...regForm, email: e.target.value })}
                    placeholder="student@gmail.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Password (මුරපදය):</label>
                  <input
                    type="password"
                    required
                    value={regForm.password}
                    onChange={e => setRegForm({ ...regForm, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number:</label>
                    <input
                      type="text"
                      required
                      value={regForm.phone}
                      onChange={e => setRegForm({ ...regForm, phone: e.target.value })}
                      placeholder="077 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">A/L Batch:</label>
                    <select
                      value={regForm.batch}
                      onChange={e => setRegForm({ ...regForm, batch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white cursor-pointer"
                    >
                      <option value="2027 A/L">2027 A/L</option>
                      <option value="2028 A/L">2028 A/L</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-amber-400 mb-1">
                    Postal Address (Tute Delivery Address) <span className="text-red-400">*Required</span>:
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={regForm.address}
                    onChange={e => setRegForm({ ...regForm, address: e.target.value })}
                    placeholder="No. 45, Main Street, Kandy"
                    className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                  className="w-full py-3.5 rounded-xl text-slate-950 font-extrabold text-xs shadow-lg transition-all cursor-pointer hover:opacity-90"
                >
                  Create Student Account
                </button>
              </form>
            )}

          </div>
        </div>
      ) : (
        <>
          {/* GLOBAL NAVBAR / HEADER */}
          <header className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-colors w-full ${
            theme === 'dark' ? 'bg-[#0b0f19]/90 border-slate-800' : 'bg-white/95 border-slate-300 shadow-sm'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
              
              {/* Dynamic Branding Logo & Name */}
              <div 
                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer min-w-0"
                onClick={() => setActiveTab(isDevAuthenticated ? 'dev-tools' : role === 'student' ? 'dashboard' : 'admin-dash')}
              >
                <div 
                  style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center text-slate-950 shadow-lg flex-shrink-0"
                >
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <span className={`text-base sm:text-xl font-extrabold tracking-tight block truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {lmsBrandConfig.appName}
                  </span>
                  <span style={{ color: lmsBrandConfig.primaryColor }} className="block text-[10px] sm:text-[11px] font-bold tracking-wider truncate">
                    {lmsBrandConfig.tagline}
                  </span>
                </div>
              </div>

              {/* Student Navigation Tabs - Highlighted in English */}
              {role === 'student' && !isDevAuthenticated && (
                <nav className={`hidden lg:flex items-center gap-1 p-1.5 rounded-2xl border ${
                  theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-200/80 border-slate-300'
                }`}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('dashboard')}
                    style={activeTab === 'dashboard' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'dashboard'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('courses')}
                    style={activeTab === 'courses' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'courses'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    My Classes
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('timed-exams')}
                    style={activeTab === 'timed-exams' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'timed-exams'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <Timer className="w-3.5 h-3.5" />
                    <span>Timed Exams</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('quiz')}
                    style={activeTab === 'quiz' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'quiz'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <Trophy className="w-3.5 h-3.5" />
                    <span>MCQ Quiz</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('forum')}
                    style={activeTab === 'forum' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'forum'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Q&A Forum</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('podcasts')}
                    style={activeTab === 'podcasts' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'podcasts'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5" />
                    <span>Podcasts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('assignments')}
                    style={activeTab === 'assignments' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'assignments'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>PDF Papers</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    style={activeTab === 'profile' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'profile'
                        ? 'text-slate-950 font-extrabold shadow-md'
                        : theme === 'dark' ? 'text-slate-300 hover:text-white' : 'text-slate-800 hover:text-slate-950'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>Profile & Charts</span>
                  </button>
                </nav>
              )}

              {/* Admin Navigation Tabs - Highlighted in English */}
              {role === 'admin' && !isDevAuthenticated && (
                <nav className={`hidden xl:flex items-center gap-1 p-1.5 rounded-2xl border ${
                  theme === 'dark' ? 'bg-purple-950/40 border-purple-800/50' : 'bg-purple-100 border-purple-300'
                }`}>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-dash')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'admin-dash' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-exams')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-exams' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <ClipboardList className="w-3.5 h-3.5 text-amber-400" />
                    <span>Exams</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-podcasts')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-podcasts' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <Radio className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Podcasts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-attendance')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-attendance' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Attendance</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-forum')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-forum' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Q&A</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-notifications')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-notifications' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5 text-green-400" />
                    <span>SMS/WA</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-analytics')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-analytics' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <BarChart2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Charts</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-evaluator')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activeTab === 'admin-evaluator' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    <BrainCircuit className="w-3.5 h-3.5 text-amber-500" />
                    <span>AI Eval</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-payments')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all relative cursor-pointer ${
                      activeTab === 'admin-payments' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    Slips
                    {pendingPayments.filter(p => p.status === 'Pending Verification').length > 0 && (
                      <span className="ml-1 px-1.5 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black">
                        {pendingPayments.filter(p => p.status === 'Pending Verification').length}
                      </span>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('admin-courses')}
                    className={`px-2.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'admin-courses' ? 'bg-purple-600 text-white shadow-md' : theme === 'dark' ? 'text-purple-300 hover:text-white' : 'text-purple-900 hover:bg-purple-200'
                    }`}
                  >
                    Classes
                  </button>
                </nav>
              )}

              {/* Developer Tool Navigation Tabs */}
              {/* Controls: Notification Bell, Theme Switcher & Admin / Dev Security Buttons */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {role === 'student' && !isDevAuthenticated && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowNotifDrawer(!showNotifDrawer);
                      setNotifications(prev => prev.map(n => ({ ...n, read: true })));
                    }}
                    className={`relative p-2.5 rounded-xl border transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-emerald-400 hover:bg-slate-800'
                        : 'bg-white border-slate-300 text-emerald-700 hover:bg-slate-100 shadow-sm'
                    }`}
                    title="SMS & WhatsApp Notifications"
                  >
                    <Bell className="w-4 h-4" />
                    {notifications.filter(n => !n.read).length > 0 && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-black flex items-center justify-center">
                        {notifications.filter(n => !n.read).length}
                      </span>
                    )}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                    theme === 'dark' 
                      ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                      : 'bg-white border-slate-300 text-slate-800 hover:bg-slate-100 shadow-sm'
                  }`}
                  title="Toggle Light / Dark Mode"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>

                {!isDevAuthenticated && (
                  <button
                    type="button"
                    onClick={() => setShowDevAuthModal(true)}
                    className={`hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-indigo-600/20 text-indigo-400 border-indigo-500/40 hover:bg-indigo-600 hover:text-white'
                        : 'bg-indigo-100 text-indigo-800 border-indigo-300 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    <Key className="w-3.5 h-3.5" />
                    <span>Dev Tool</span>
                  </button>
                )}

                {isDevAuthenticated && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsDevAuthenticated(false);
                      setActiveTab(role === 'admin' ? 'admin-dash' : 'dashboard');
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Dev Exit</span>
                  </button>
                )}

                {role === 'admin' && !isDevAuthenticated ? (
                  <button
                    type="button"
                    onClick={() => {
                      setRole('student');
                      setIsAdminAuthenticated(false);
                      setActiveTab('dashboard');
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-red-500/20 text-red-500 border border-red-500/35 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">Admin Exit</span>
                  </button>
                ) : !isDevAuthenticated && (
                  <button
                    type="button"
                    onClick={() => setShowAdminAuthModal(true)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-amber-400'
                        : 'bg-white border-slate-300 text-slate-800 hover:text-amber-600 shadow-sm'
                    }`}
                  >
                    <LockKeyhole className="w-3.5 h-3.5 text-amber-500" />
                    <span className="hidden sm:inline">Admin</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsAdminAuthenticated(false);
                    setIsDevAuthenticated(false);
                    setRole('student');
                  }}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-bold bg-red-500/20 text-red-500 border border-red-500/35 hover:bg-red-500 hover:text-white transition-all cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </div>

            </div>

            {/* Mobile Bottom / Sub Navigation Bar - English Highlighted */}
            <div className={`xl:hidden flex overflow-x-auto gap-2 px-4 py-2.5 border-t scrollbar-none ${
              theme === 'dark' ? 'bg-slate-950/90 border-slate-800' : 'bg-slate-200 border-slate-300'
            }`}>
              {role === 'student' && !isDevAuthenticated && (
                <>
                  <button
                    type="button"
                    onClick={() => setActiveTab('dashboard')}
                    style={activeTab === 'dashboard' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'dashboard' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('courses')}
                    style={activeTab === 'courses' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'courses' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    My Classes
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('timed-exams')}
                    style={activeTab === 'timed-exams' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'timed-exams' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    Timed Exams
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('quiz')}
                    style={activeTab === 'quiz' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'quiz' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    MCQ Quiz
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('forum')}
                    style={activeTab === 'forum' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'forum' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    Q&A Forum
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('podcasts')}
                    style={activeTab === 'podcasts' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'podcasts' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    Podcasts
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('assignments')}
                    style={activeTab === 'assignments' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'assignments' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    PDF Papers
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    style={activeTab === 'profile' ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      activeTab === 'profile' ? 'text-slate-950 font-extrabold' : theme === 'dark' ? 'text-slate-300 bg-slate-900' : 'text-slate-800 bg-white'
                    }`}
                  >
                    Profile & Charts
                  </button>
                </>
              )}
              {role === 'admin' && !isDevAuthenticated && (
                <>
                  <button type="button" onClick={() => setActiveTab('admin-dash')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-dash' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Dashboard</button>
                  <button type="button" onClick={() => setActiveTab('admin-exams')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-exams' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Timed Exams</button>
                  <button type="button" onClick={() => setActiveTab('admin-podcasts')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-podcasts' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Podcasts</button>
                  <button type="button" onClick={() => setActiveTab('admin-attendance')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-attendance' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Attendance</button>
                  <button type="button" onClick={() => setActiveTab('admin-forum')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-forum' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Q&A Forum</button>
                  <button type="button" onClick={() => setActiveTab('admin-notifications')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-notifications' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>SMS/WhatsApp</button>
                  <button type="button" onClick={() => setActiveTab('admin-analytics')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-analytics' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Analytics</button>
                  <button type="button" onClick={() => setActiveTab('admin-evaluator')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-evaluator' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>AI Evaluator</button>
                  <button type="button" onClick={() => setActiveTab('admin-payments')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-payments' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Bank Slips</button>
                  <button type="button" onClick={() => setActiveTab('admin-courses')} className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 cursor-pointer ${activeTab === 'admin-courses' ? 'bg-purple-600 text-white' : theme === 'dark' ? 'bg-slate-900 text-purple-300' : 'bg-white text-purple-900'}`}>Class Manager</button>
                </>
              )}
            </div>
          </header>

          {/* SMS & WHATSAPP NOTIFICATION DRAWER FOR STUDENTS */}
          {showNotifDrawer && role === 'student' && (
            <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
              <div className={`w-full max-w-md h-full p-6 overflow-y-auto border-l shadow-2xl space-y-5 ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
              }`}>
                <div className="flex justify-between items-center border-b pb-4 border-slate-800/40">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-emerald-500" />
                    <div>
                      <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        SMS & WhatsApp Alerts
                      </h3>
                      <p className="text-[11px] text-slate-400">Registered Phone: {studentProfile.phone}</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setShowNotifDrawer(false)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer">✕</button>
                </div>

                <div className="space-y-3">
                  {notifications.map(n => (
                    <div key={n.id} className={`p-4 rounded-2xl border space-y-1.5 ${
                      theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                          n.channel === 'WhatsApp' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-sky-500/20 text-sky-400'
                        }`}>
                          {n.channel} Gateway
                        </span>
                        <span className="text-[10px] text-slate-500">{n.time}</span>
                      </div>
                      <h4 className={`text-xs font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{n.title}</h4>
                      <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{n.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MAIN CONTAINER */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 w-full">

            {/* DEVELOPER TOOL PANEL: PROFILE-WISE TEACHER MANAGEMENT & LICENSE CONTROL */}
            {isDevAuthenticated && activeTab === 'dev-tools' && (
              <div className="space-y-8 max-w-6xl mx-auto w-full">
                
                {/* Top Header */}
                <div className={`p-6 sm:p-8 rounded-3xl border shadow-2xl space-y-6 ${
                  theme === 'dark' ? 'bg-slate-900 border-indigo-500/40' : 'bg-white border-indigo-300'
                }`}>
                  <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-5 ${
                    theme === 'dark' ? 'border-slate-800' : 'border-slate-300'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Cpu className="w-8 h-8 text-indigo-500 animate-pulse flex-shrink-0" />
                      <div>
                        <h2 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          Developer Studio • Teacher Profiles & License Control
                        </h2>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Manage multiple teacher LMS profiles individually — inspect status, customize branding/themes, or suspend/activate accounts independently. (ගුරුවරුන්ගේ ගිණුම් වෙන වෙනම පාලනය කරන්න)
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setShowNewTeacherModal(true)}
                      className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold flex items-center gap-2 shadow-lg cursor-pointer whitespace-nowrap"
                    >
                      <Plus className="w-4 h-4" />
                      <span>+ Add Teacher Profile</span>
                    </button>
                  </div>

                  {/* TEACHER PROFILES DIRECTORY (PROFILE-WISE VIEW) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-sm font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-700'}`}>
                        Registered Teacher Profiles ({teacherProfiles.length} Instances)
                      </h3>
                      <span className={`text-xs font-semibold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        Click a profile to load & preview its LMS workspace
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {teacherProfiles.map(prof => {
                        const isSelected = prof.id === activeTeacherProfileId;
                        return (
                          <div
                            key={prof.id}
                            className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-4 ${
                              isSelected
                                ? theme === 'dark'
                                  ? 'bg-slate-950 border-indigo-500 ring-2 ring-indigo-500/40 shadow-xl'
                                  : 'bg-indigo-50/70 border-indigo-500 ring-2 ring-indigo-500/30 shadow-md'
                                : theme === 'dark'
                                  ? 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                                  : 'bg-slate-50 border-slate-300 hover:border-slate-400'
                            }`}
                          >
                            <div className="space-y-3">
                              <div className="flex items-start justify-between gap-2">
                                <div className="flex items-center gap-2.5 min-w-0">
                                  <div
                                    style={{ backgroundColor: prof.primaryColor }}
                                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 shadow"
                                  >
                                    {prof.appName.charAt(0)}
                                  </div>
                                  <div className="min-w-0">
                                    <h4 className={`text-sm font-extrabold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                      {prof.appName}
                                    </h4>
                                    <p className={`text-[11px] truncate ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                                      {prof.teacherName}
                                    </p>
                                  </div>
                                </div>

                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold whitespace-nowrap ${
                                  prof.isSystemActive
                                    ? 'bg-emerald-500/20 text-emerald-500 border border-emerald-500/30'
                                    : 'bg-red-500/20 text-red-500 border border-red-500/30'
                                }`}>
                                  {prof.isSystemActive ? 'ACTIVE' : 'SUSPENDED'}
                                </span>
                              </div>

                              <div className={`p-3 rounded-xl border text-[11px] space-y-1 ${
                                theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
                              }`}>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Subject:</span>
                                  <span className="font-bold truncate max-w-[150px]">{prof.subjectName}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Monthly Fee:</span>
                                  <span className="font-bold text-amber-500">{prof.monthlyFeeDue}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Billing Status:</span>
                                  <span className={`font-bold ${prof.isSystemActive ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {prof.serviceFeeStatus}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Individual Profile Actions */}
                            <div className="flex items-center gap-2 pt-1">
                              <button
                                type="button"
                                onClick={() => setActiveTeacherProfileId(prof.id)}
                                className={`flex-1 py-2 px-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                                  isSelected
                                    ? 'bg-indigo-600 text-white shadow'
                                    : theme === 'dark'
                                      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                                      : 'bg-white border border-slate-300 text-slate-800 hover:bg-slate-100'
                                }`}
                              >
                                {isSelected ? '✓ Active Workspace' : 'Manage Profile'}
                              </button>

                              <button
                                type="button"
                                onClick={() => toggleTeacherProfileSuspension(prof.id)}
                                className={`py-2 px-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                                  prof.isSystemActive
                                    ? 'bg-red-500/20 text-red-500 border border-red-500/35 hover:bg-red-600 hover:text-white'
                                    : 'bg-emerald-600 text-white hover:bg-emerald-500'
                                }`}
                                title={prof.isSystemActive ? 'Suspend this Teacher LMS' : 'Activate this Teacher LMS'}
                              >
                                {prof.isSystemActive ? 'Suspend' : 'Activate'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* SELECTED PROFILE CUSTOMIZATION & LICENSE EDITOR */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800/40">
                    <div className={`p-6 rounded-2xl border space-y-4 ${
                      theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                    }`}>
                      <h4 className={`text-sm font-extrabold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <Settings className="w-4 h-4 text-indigo-500" />
                        <span>Selected Profile Branding ({activeTeacherProfile.appName})</span>
                      </h4>

                      <div className="space-y-3">
                        <div>
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Header LMS Brand Name:
                          </label>
                          <input
                            type="text"
                            value={activeTeacherProfile.appName}
                            onChange={e => updateActiveTeacherProfile({ appName: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Header Tagline / Subtitle:
                          </label>
                          <input
                            type="text"
                            value={activeTeacherProfile.tagline}
                            onChange={e => updateActiveTeacherProfile({ tagline: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Teacher Display Name:
                          </label>
                          <input
                            type="text"
                            value={activeTeacherProfile.teacherName}
                            onChange={e => {
                              updateActiveTeacherProfile({ teacherName: e.target.value });
                              setHeroBanner(prev => ({ ...prev, teacherName: e.target.value }));
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Subject Title:
                          </label>
                          <input
                            type="text"
                            value={activeTeacherProfile.subjectName}
                            onChange={e => {
                              updateActiveTeacherProfile({ subjectName: e.target.value });
                              setHeroBanner(prev => ({ ...prev, subjectTitle: e.target.value }));
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>

                        <div>
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Footer Copyright Text:
                          </label>
                          <input
                            type="text"
                            value={activeTeacherProfile.footerText}
                            onChange={e => updateActiveTeacherProfile({ footerText: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Multi-Theme Skins & System License Suspension for Selected Profile */}
                    <div className="space-y-6">
                      <div className={`p-6 rounded-2xl border space-y-4 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                      }`}>
                        <h4 className={`text-sm font-extrabold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <Sliders className="w-4 h-4 text-indigo-500" />
                          <span>Theme Skins for {activeTeacherProfile.appName}</span>
                        </h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {[
                            { name: 'Royal History Gold', primary: '#f59e0b', secondary: '#8b5cf6' },
                            { name: 'Cyber Science Blue', primary: '#0ea5e9', secondary: '#6366f1' },
                            { name: 'Emerald Bio Green', primary: '#10b981', secondary: '#059669' },
                            { name: 'Crimson Commerce Red', primary: '#f43f5e', secondary: '#e11d48' },
                            { name: 'Violet Arts Studio', primary: '#a855f7', secondary: '#ec4899' },
                            { name: 'Tangerine Tech Orange', primary: '#f97316', secondary: '#eab308' }
                          ].map(skin => (
                            <button
                              key={skin.name}
                              type="button"
                              onClick={() => handleApplyThemeSkin(skin)}
                              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                                activeTeacherProfile.themePresetName === skin.name
                                  ? 'border-indigo-500 bg-indigo-500/15 ring-1 ring-indigo-500'
                                  : theme === 'dark' ? 'border-slate-800 bg-slate-900 hover:border-slate-700' : 'border-slate-300 bg-white hover:border-slate-400'
                              }`}
                            >
                              <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{skin.name}</span>
                              <div className="flex gap-1">
                                <span style={{ backgroundColor: skin.primary }} className="w-3.5 h-3.5 rounded-full"></span>
                                <span style={{ backgroundColor: skin.secondary }} className="w-3.5 h-3.5 rounded-full"></span>
                              </div>
                            </button>
                          ))}
                        </div>

                        <div className="pt-2">
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Custom Primary Accent Color:
                          </label>
                          <div className="flex items-center gap-3">
                            <input
                              type="color"
                              value={activeTeacherProfile.primaryColor}
                              onChange={e => updateActiveTeacherProfile({ primaryColor: e.target.value, themePresetName: 'Custom' })}
                              className="w-10 h-10 rounded-xl bg-transparent cursor-pointer border-0"
                            />
                            <span className="text-xs font-mono font-bold text-indigo-500">{activeTeacherProfile.primaryColor}</span>
                          </div>
                        </div>
                      </div>

                      {/* LICENSE & SUSPENSION CONTROL FOR SELECTED PROFILE */}
                      <div className={`p-6 rounded-2xl border space-y-4 ${
                        theme === 'dark' ? 'bg-slate-950 border-red-500/30' : 'bg-red-50 border-red-300'
                      }`}>
                        <h4 className={`text-sm font-extrabold flex items-center gap-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-800'}`}>
                          <ShieldAlert className="w-4 h-4 text-red-500" />
                          <span>Account Suspension & Billing ({activeTeacherProfile.appName})</span>
                        </h4>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                          <div>
                            <span className={`text-xs font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Profile System Status</span>
                            <span className={`text-[11px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                              Suspend or activate this specific teacher profile
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => toggleTeacherProfileSuspension(activeTeacherProfile.id)}
                            className={`px-4 py-2 rounded-xl text-xs font-extrabold cursor-pointer ${
                              activeTeacherProfile.isSystemActive ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'
                            }`}
                          >
                            {activeTeacherProfile.isSystemActive ? 'Active (ක්‍රියාත්මකයි)' : 'Suspended (අත්හිටුවා ඇත)'}
                          </button>
                        </div>

                        <div className="pt-2 border-t border-slate-800/40">
                          <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                            Service Fee Status:
                          </label>
                          <select
                            value={activeTeacherProfile.serviceFeeStatus}
                            onChange={e => {
                              const val = e.target.value;
                              updateActiveTeacherProfile({
                                serviceFeeStatus: val,
                                isSystemActive: val === 'Paid'
                              });
                            }}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold cursor-pointer ${
                              theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                            }`}
                          >
                            <option value="Paid">Paid (Active)</option>
                            <option value="Unpaid - Suspended">Unpaid - Suspended</option>
                          </select>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* STUDENT PORTAL */}
            {role === 'student' && !isDevAuthenticated && (
              <div className="space-y-8 w-full">

                {/* HERO BANNER - Highlighted English Headings + Sinhala Subtitle */}
                <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={heroBanner.photoUrl}
                      alt={heroBanner.teacherName}
                      className="w-full h-full object-cover opacity-25 filter blur-xs transform scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent"></div>
                  </div>

                  <div className="relative z-10 p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4 max-w-2xl text-center md:text-left">
                      <span 
                        style={{ color: lmsBrandConfig.primaryColor, borderColor: `${lmsBrandConfig.primaryColor}40`, backgroundColor: `${lmsBrandConfig.primaryColor}20` }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold border tracking-wider uppercase"
                      >
                        <Sparkles className="w-3.5 h-3.5" />
                        {heroBanner.tagline}
                      </span>
                      <div>
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight">
                          {heroBanner.mainHeading}
                        </h1>
                        <p style={{ color: lmsBrandConfig.primaryColor }} className="font-bold text-sm sm:text-base mt-2">
                          {lmsBrandConfig.teacherName} • {lmsBrandConfig.subjectName}
                        </p>
                      </div>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {heroBanner.subMessage}
                      </p>
                      <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-3">
                        <button
                          type="button"
                          onClick={() => setActiveTab('courses')}
                          style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                          className="px-6 py-3 rounded-xl text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:opacity-90"
                        >
                          <span>Explore Monthly Classes</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Progress Circle Widget */}
                    <div className="w-full sm:w-auto flex-shrink-0 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
                      <div className="relative w-24 h-24 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="48" cy="48" r="38" stroke="currentColor" strokeWidth="8" className="text-slate-800" fill="transparent" />
                          <circle 
                            cx="48" cy="48" r="38" 
                            stroke={lmsBrandConfig.primaryColor} strokeWidth="8" 
                            className="transition-all duration-1000" 
                            fill="transparent"
                            strokeDasharray={2 * Math.PI * 38}
                            strokeDashoffset={2 * Math.PI * 38 * (1 - overallPercentage / 100)}
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute text-xl font-black text-white">{overallPercentage}%</span>
                      </div>
                      <p className="text-xs font-bold text-white mt-3">Overall Course Progress</p>
                      <p className="text-[11px] text-slate-400">අගුළු ඇර ඇති පාඩම් ප්‍රගතිය</p>
                      <p style={{ color: lmsBrandConfig.primaryColor }} className="text-xs font-bold mt-1">{completedCount} / {totalUnlocked} Lessons</p>
                    </div>
                  </div>
                </div>

                {/* LIVE ZOOM COUNTDOWN & QUICK ACCESS BANNER */}
                {liveZoomConfig.isActive && (
                  <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/35 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-center md:text-left">
                      <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-400 flex-shrink-0">
                        <Timer className="w-6 h-6 animate-pulse" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold uppercase text-purple-400 tracking-wider">
                          Next Live Zoom Masterclass • ඊළඟ සජීවී පන්තිය
                        </span>
                        <h3 className="text-base sm:text-lg font-extrabold text-white">{liveZoomConfig.title}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap justify-center">
                      <div className="flex gap-2 text-center">
                        <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10">
                          <span className="text-lg font-black text-amber-400">{String(zoomCountdown.hours).padStart(2, '0')}</span>
                          <span className="block text-[9px] text-slate-400 uppercase font-bold">Hours</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10">
                          <span className="text-lg font-black text-amber-400">{String(zoomCountdown.minutes).padStart(2, '0')}</span>
                          <span className="block text-[9px] text-slate-400 uppercase font-bold">Mins</span>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-black/60 border border-white/10">
                          <span className="text-lg font-black text-amber-400">{String(zoomCountdown.seconds).padStart(2, '0')}</span>
                          <span className="block text-[9px] text-slate-400 uppercase font-bold">Secs</span>
                        </div>
                      </div>

                      <a
                        href={liveZoomConfig.zoomUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={handleJoinZoomLive}
                        style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                        className="px-5 py-3 rounded-xl text-slate-950 font-extrabold text-xs flex items-center gap-2 shadow-lg hover:opacity-90 transition-all"
                      >
                        <Tv className="w-4 h-4" />
                        <span>Join Zoom Live {attendanceConfig.autoTrackZoom ? '(Auto Attendance)' : ''}</span>
                      </a>
                    </div>
                  </div>
                )}

                {/* STUDENT DASHBOARD / COURSES TAB */}
                {(activeTab === 'dashboard' || activeTab === 'courses') && (
                  <div className="space-y-8 w-full">
                    
                    {/* Metrics Cards - Primary English Labels + Sinhala Subtitles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                      <div className={`p-5 rounded-2xl border transition-all ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-sm'
                      }`}>
                        <p className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Enrolled Classes</p>
                        <h4 className={`text-xl font-extrabold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{courses.length} Active</h4>
                        <span className="text-[11px] text-slate-500">ලියාපදිංචි පන්ති</span>
                      </div>

                      <div className={`p-5 rounded-2xl border transition-all ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-sm'
                      }`}>
                        <p className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Unlocked Months</p>
                        <h4 className={`text-xl font-extrabold mt-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {courses.flatMap(c => c.monthlyModules).filter(m => m.isPaid).length} Unlocked
                        </h4>
                        <span className="text-[11px] text-slate-500">අගුළු ඇර ඇති මාස</span>
                      </div>

                      <div className={`p-5 rounded-2xl border transition-all ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-sm'
                      }`}>
                        <p className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Completion Rate</p>
                        <h4 style={{ color: lmsBrandConfig.primaryColor }} className="text-xl font-extrabold mt-1">{overallPercentage}% Done</h4>
                        <span className="text-[11px] text-slate-500">නරඹා ඇති ප්‍රගතිය</span>
                      </div>

                      {/* Live Attendance & Digital Badge Card */}
                      <div className={`p-5 rounded-2xl border transition-all ${
                        theme === 'dark' ? 'bg-slate-900 border-emerald-500/30' : 'bg-white border-emerald-300 shadow-sm'
                      }`}>
                        <p className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Zoom Attendance</p>
                        <h4 className="text-xl font-extrabold mt-1 text-emerald-500">{attendancePercentage}% ({presentSessionsCount}/{attendanceConfig.totalSessionsHeld})</h4>
                        {isBadgeUnlocked ? (
                          <button
                            type="button"
                            onClick={() => setShowBadgeModal(true)}
                            className="mt-1 text-[11px] font-extrabold text-amber-400 underline flex items-center gap-1 cursor-pointer"
                          >
                            <Award className="w-3.5 h-3.5" /> View Honor Badge
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-500">Need {attendanceConfig.badgeThreshold}% for Badge</span>
                        )}
                      </div>

                      <div className={`p-5 rounded-2xl border transition-all ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300 shadow-sm'
                      }`}>
                        <p className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Reward Points</p>
                        <h4 className="text-xl font-extrabold mt-1 text-amber-500 flex items-center gap-1">
                          <Zap className="w-4 h-4" /> {studentProfile.rewardPoints} Pts
                        </h4>
                        <span className="text-[11px] text-slate-500">ප්‍රසාද ලකුණු</span>
                      </div>
                    </div>

                    {/* Batch Selector & Dynamic Custom Color Gradient Cards */}
                    <div className="space-y-4 w-full">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h2 className={`text-lg sm:text-xl font-extrabold flex items-center gap-2 tracking-tight ${
                            theme === 'dark' ? 'text-white' : 'text-slate-900'
                          }`}>
                            <BookOpen style={{ color: lmsBrandConfig.primaryColor }} className="w-5 h-5 flex-shrink-0" />
                            <span>Monthly Classes & Recordings (2027 / 2028 A/L)</span>
                          </h2>
                          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                            උසස් පෙළ ඉතිහාසය - මාසික පන්ති සහ වීඩියෝ පාඩම්
                          </p>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                          {['All', '2027 A/L', '2028 A/L'].map(batch => (
                            <button
                              key={batch}
                              type="button"
                              onClick={() => setBatchFilter(batch)}
                              style={batchFilter === batch ? { backgroundColor: lmsBrandConfig.primaryColor } : {}}
                              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                                batchFilter === batch
                                  ? 'text-slate-950 font-extrabold'
                                  : theme === 'dark' ? 'bg-slate-900 text-slate-400 border border-slate-800' : 'bg-white text-slate-700 border border-slate-300'
                              }`}
                            >
                              {batch}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Gradient Cards Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                        {filteredCourses.map(course => (
                          <div
                            key={course.id}
                            style={{
                              background: `linear-gradient(135deg, ${course.color1} 0%, ${course.color2} 100%)`
                            }}
                            className="rounded-3xl border border-white/10 p-6 space-y-4 shadow-2xl flex flex-col justify-between text-white w-full"
                          >
                            <div className="space-y-3">
                              <div className="flex justify-between items-start gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-white/20 backdrop-blur-md text-amber-300 border border-white/20">
                                  {course.batchYear} • {course.category}
                                </span>
                                <span className="text-xs font-bold text-amber-300 bg-black/40 px-3 py-1 rounded-full backdrop-blur-md whitespace-nowrap">
                                  Rs. {course.feePerMonth}/=
                                </span>
                              </div>

                              <div>
                                <h3 className="text-lg font-extrabold text-white tracking-tight">{course.title}</h3>
                                <p className="text-xs text-slate-300 mt-0.5">{course.sinhalaTitle}</p>
                              </div>

                              <p className="text-xs text-slate-200/90 leading-relaxed">{course.description}</p>

                              {/* Month Modules List */}
                              <div className="space-y-2 pt-2">
                                <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-300">Monthly Modules (මාසික අන්තර්ගතය):</h4>
                                {course.monthlyModules.map(month => (
                                  <div
                                    key={month.monthId}
                                    className={`p-3.5 rounded-2xl border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${
                                      month.isPaid ? 'bg-black/60 border-white/10' : 'bg-black/30 border-amber-500/30'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      {month.isPaid ? (
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                      ) : (
                                        <Lock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                      )}
                                      <div>
                                        <h5 className="text-xs font-bold text-white">{month.monthName}</h5>
                                        <span className="text-[10px] text-slate-300">
                                          {month.isPaid ? `${month.lessons.length} Lessons Unlocked` : 'Locked • Upload Bank Slip to Unlock'}
                                        </span>
                                      </div>
                                    </div>

                                    {month.isPaid ? (
                                      <button
                                        type="button"
                                        onClick={() => setSelectedCourse({ ...course, activeMonth: month })}
                                        style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                                        className="w-full sm:w-auto px-4 py-2 rounded-xl text-slate-950 text-xs font-extrabold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                                      >
                                        <PlayCircle className="w-3.5 h-3.5" />
                                        <span>Watch Lessons</span>
                                      </button>
                                    ) : (
                                      <button
                                        type="button"
                                        onClick={() => setPaymentModal({ course, monthModule: month })}
                                        style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                                        className="w-full sm:w-auto px-4 py-2 rounded-xl text-slate-950 text-xs font-extrabold shadow-md transition-all cursor-pointer"
                                      >
                                        Unlock (Slip)
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>

                            </div>
                          </div>
                        ))}
                      </div>

                    </div>

                  </div>
                )}

                {/* 4. TIMED MOCK EXAMS TAB (STUDENT) */}
                {activeTab === 'timed-exams' && (
                  <div className="space-y-8 w-full max-w-4xl mx-auto">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <Timer className="w-6 h-6 text-amber-500 flex-shrink-0" />
                        <span>Timed Mock Exams (කාල සීමා සහිත මාසික වාර විභාග)</span>
                      </h2>
                      <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        නියමිත කාලය අවසන් වූ විට පිළිතුරු පත්‍රය ස්වයංක්‍රීයව Submit වී ලකුණු සහ නිවැරදි පිළිතුරු පෙන්වනු ඇත.
                      </p>
                    </div>

                    {!activeExamSession ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mockExams.filter(ex => ex.isActive).map(exam => (
                          <div key={exam.id} className={`p-6 rounded-3xl border space-y-4 shadow-xl flex flex-col justify-between ${
                            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                          }`}>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/35">
                                  {exam.batch}
                                </span>
                                <span className="text-xs font-extrabold text-purple-400 flex items-center gap-1">
                                  <Clock className="w-3.5 h-3.5" /> {exam.durationMinutes} Mins
                                </span>
                              </div>
                              <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{exam.title}</h3>
                              <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{exam.description}</p>
                              <p className="text-xs font-bold text-emerald-500">Total Questions: {exam.questions.length}</p>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleStartTimedExam(exam)}
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="w-full py-3.5 rounded-xl text-slate-950 font-black text-xs shadow-lg cursor-pointer hover:opacity-90"
                            >
                              Start Timed Exam Now
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 shadow-2xl ${
                        theme === 'dark' ? 'bg-slate-900 border-amber-500/40' : 'bg-white border-amber-400'
                      }`}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-4 border-slate-800/40">
                          <div>
                            <h3 className={`text-lg font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{activeExamSession.exam.title}</h3>
                            <p className="text-xs text-slate-400">Answer all questions before the countdown reaches 00:00</p>
                          </div>
                          {!activeExamSession.submitted && (
                            <div className="px-4 py-2 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 font-mono text-lg font-black flex items-center gap-2">
                              <Timer className="w-5 h-5 animate-pulse" />
                              <span>
                                {String(Math.floor(activeExamSession.timeLeftSeconds / 60)).padStart(2, '0')}:
                                {String(activeExamSession.timeLeftSeconds % 60).padStart(2, '0')}
                              </span>
                            </div>
                          )}
                        </div>

                        {activeExamSession.submitted ? (
                          <div className="space-y-6">
                            <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-2">
                              <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
                              <h4 className={`text-xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                Exam Completed! Score: {activeExamSession.score} / {activeExamSession.exam.questions.length}
                              </h4>
                              <p className="text-xs text-emerald-400 font-bold">+{activeExamSession.score * 15} Reward Points Added!</p>
                            </div>

                            <div className="space-y-4">
                              <h4 className={`text-sm font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Answer Review & Explanations:</h4>
                              {activeExamSession.exam.questions.map((q, qIdx) => {
                                const userAns = activeExamSession.answers[qIdx];
                                const isCorrect = userAns === q.correct;
                                return (
                                  <div key={q.id} className={`p-4 rounded-2xl border space-y-2 text-xs ${
                                    theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                                  }`}>
                                    <p className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{qIdx + 1}. {q.question}</p>
                                    <p className={isCorrect ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                                      Your Answer: {userAns !== undefined ? q.options[userAns] : 'Not Answered'} ({isCorrect ? 'Correct ✓' : 'Incorrect ✕'})
                                    </p>
                                    <p className="text-amber-400 font-bold">Correct Answer: {q.options[q.correct]}</p>
                                    <p className="text-slate-400">{q.explanation}</p>
                                  </div>
                                );
                              })}
                            </div>

                            <button
                              type="button"
                              onClick={() => setActiveExamSession(null)}
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="px-6 py-3 rounded-xl text-slate-950 font-black text-xs cursor-pointer"
                            >
                              Back to Exams List
                            </button>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            {activeExamSession.exam.questions.map((q, qIdx) => (
                              <div key={q.id} className={`p-5 rounded-2xl border space-y-3 ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                              }`}>
                                <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                  {qIdx + 1}. {q.question}
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {q.options.map((opt, oIdx) => (
                                    <button
                                      key={oIdx}
                                      type="button"
                                      onClick={() => setActiveExamSession({
                                        ...activeExamSession,
                                        answers: { ...activeExamSession.answers, [qIdx]: oIdx }
                                      })}
                                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                                        activeExamSession.answers[qIdx] === oIdx
                                          ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                                          : theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-white border-slate-300 text-slate-800'
                                      }`}
                                    >
                                      {opt}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            ))}

                            <div className="flex justify-between items-center pt-2">
                              <button
                                type="button"
                                onClick={() => setActiveExamSession(null)}
                                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
                              >
                                Cancel Exam
                              </button>
                              <button
                                type="button"
                                onClick={handleSubmitTimedExam}
                                style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                                className="px-6 py-3 rounded-xl text-slate-950 font-black text-xs shadow-lg cursor-pointer"
                              >
                                Submit Exam Answers
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* 3. STUDENT Q&A / DISCUSSION FORUM TAB */}
                {activeTab === 'forum' && (
                  <div className="space-y-8 w-full max-w-4xl mx-auto">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <MessageSquare className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                        <span>Student Q&A Discussion Forum (සිසුන්ගේ ගැටලු සහ සර්ගේ පිළිතුරු)</span>
                      </h2>
                      <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        පාඩම් වල ඇති සැක සහ විෂය කරුණු මෙහි යොමු කර ප්‍රවීන් සුරංජන සර්ගේ නිල පිළිතුරු ලබාගන්න.
                      </p>
                    </div>

                    {/* Ask a Question Form */}
                    <form onSubmit={handlePostForumQuestion} className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                    }`}>
                      <h3 className={`text-sm font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        නව ප්‍රශ්නයක් යොමු කරන්න (Ask a Question / Doubt):
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">අදාළ පාඩම (Lesson Topic):</label>
                          <select
                            value={newForumQuestion.lessonTag}
                            onChange={e => setNewForumQuestion({ ...newForumQuestion, lessonTag: e.target.value })}
                            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                              theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                            }`}
                          >
                            <option value="01. Primary Sources of Sri Lankan History">01. Primary Sources of Sri Lankan History</option>
                            <option value="02. Pre-historic Era & Inscriptions">02. Pre-historic Era & Inscriptions</option>
                            <option value="03. Anuradhapura Kingdom & Water Civilization">03. Anuradhapura Kingdom & Water Civilization</option>
                            <option value="World History & General">World History & General</option>
                          </select>
                        </div>
                      </div>
                      <textarea
                        rows={3}
                        required
                        value={newForumQuestion.question}
                        onChange={e => setNewForumQuestion({ ...newForumQuestion, question: e.target.value })}
                        placeholder="ඔබගේ ප්‍රශ්නය සිංහලෙන් හෝ ඉංග්‍රීසියෙන් මෙහි ලියන්න..."
                        className={`w-full p-3.5 rounded-2xl border text-xs ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                        }`}
                      />
                      <button
                        type="submit"
                        style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                        className="px-6 py-3 rounded-xl text-slate-950 font-black text-xs flex items-center gap-2 shadow-lg cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Post Question to Forum</span>
                      </button>
                    </form>

                    {/* Forum Posts Feed (Pinned first) */}
                    <div className="space-y-4">
                      {[...forumPosts].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0)).map(post => (
                        <div key={post.id} className={`p-6 rounded-3xl border space-y-4 shadow-lg ${
                          post.pinned
                            ? theme === 'dark' ? 'bg-slate-900 border-amber-500/40' : 'bg-amber-50/40 border-amber-400'
                            : theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}>
                          <div className="flex flex-wrap justify-between items-center gap-2">
                            <div className="flex items-center gap-2">
                              {post.pinned && (
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-500/20 text-amber-400 flex items-center gap-1">
                                  <Pin className="w-3 h-3" /> Pinned
                                </span>
                              )}
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400">
                                {post.lessonTag}
                              </span>
                            </div>
                            <span className="text-[11px] text-slate-500">{post.studentName} • {post.timestamp}</span>
                          </div>

                          <p className={`text-sm font-semibold leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            {post.question}
                          </p>

                          {post.teacherReply && (
                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                              <span className="text-[11px] font-extrabold text-emerald-400 flex items-center gap-1">
                                <ShieldCheck className="w-3.5 h-3.5" /> Official Teacher Reply ({lmsBrandConfig.teacherName}):
                              </span>
                              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}`}>
                                {post.teacherReply}
                              </p>
                            </div>
                          )}

                          <div className="flex items-center gap-3 pt-1">
                            <button
                              type="button"
                              onClick={() => setForumPosts(prev => prev.map(p => p.id === post.id ? { ...p, upvotes: p.upvotes + 1 } : p))}
                              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                            >
                              <ThumbsUp className="w-3.5 h-3.5 text-amber-400" />
                              <span>Helpful ({post.upvotes})</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MCQ ONLINE QUIZ & LEADERBOARD TAB */}
                {activeTab === 'quiz' && (
                  <div className="space-y-8 w-full max-w-4xl mx-auto">
                    <div className={`border-b pb-4 flex justify-between items-center ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <div>
                        <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <Trophy className="w-6 h-6 text-amber-500 flex-shrink-0" />
                          <span>මාර්ගගත MCQ ප්‍රශ්න මාලාව සහ ලීඩර්බෝඩ් (Online MCQ Quiz)</span>
                        </h2>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          ප්‍රශ්න වලට පිළිතුරු සපයා ප්‍රසාද ලකුණු දිනාගන්න.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className={`lg:col-span-2 p-6 rounded-3xl border space-y-6 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        {!quizCompleted ? (
                          <div className="space-y-6">
                            <div className={`flex justify-between items-center text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                              <span>ප්‍රශ්නය {currentQuizIndex + 1} / {SAMPLE_MCQ_QUIZZES.length}</span>
                              <span className="text-amber-500">Score: {quizScore} Pts</span>
                            </div>

                            <h3 className={`text-base sm:text-lg font-bold leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                              {SAMPLE_MCQ_QUIZZES[currentQuizIndex].question}
                            </h3>

                            <div className="space-y-3">
                              {SAMPLE_MCQ_QUIZZES[currentQuizIndex].options.map((option, idx) => (
                                <button
                                  key={idx}
                                  type="button"
                                  onClick={() => setSelectedQuizOption(idx)}
                                  className={`w-full p-4 rounded-2xl text-left text-xs font-bold transition-all border cursor-pointer flex items-center justify-between ${
                                    selectedQuizOption === idx 
                                      ? 'bg-amber-500/20 border-amber-500 text-amber-500 shadow-md' 
                                      : theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700' : 'bg-slate-50 border-slate-300 text-slate-800 hover:border-slate-400'
                                  }`}
                                >
                                  <span>{option}</span>
                                  {selectedQuizOption === idx && <CheckCircle className="w-4 h-4 text-amber-500" />}
                                </button>
                              ))}
                            </div>

                            <button
                              type="button"
                              disabled={selectedQuizOption === null}
                              onClick={() => {
                                const currentQ = SAMPLE_MCQ_QUIZZES[currentQuizIndex];
                                const isCorrect = selectedQuizOption === currentQ.correct;
                                if (isCorrect) setQuizScore(prev => prev + 20);

                                if (currentQuizIndex + 1 < SAMPLE_MCQ_QUIZZES.length) {
                                  setCurrentQuizIndex(prev => prev + 1);
                                  setSelectedQuizOption(null);
                                } else {
                                  setQuizCompleted(true);
                                  setStudentProfile(prev => ({ ...prev, rewardPoints: prev.rewardPoints + 40 }));
                                }
                              }}
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="w-full py-3.5 rounded-xl text-slate-950 font-black text-xs shadow-lg transition-all cursor-pointer disabled:opacity-50"
                            >
                              {currentQuizIndex + 1 < SAMPLE_MCQ_QUIZZES.length ? 'මීළඟ ප්‍රශ්නය (Next Question)' : 'ප්‍රතිඵලය ලබාගන්න'}
                            </button>
                          </div>
                        ) : (
                          <div className="p-8 text-center space-y-4">
                            <Trophy className="w-16 h-16 text-amber-500 mx-auto animate-bounce" />
                            <h3 className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Quiz එක සාර්ථකව අවසන් කළා!</h3>
                            <p className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>ඔබ ලබාගත් ලකුණු: <span className="text-amber-500 font-bold">{quizScore} / 40</span></p>
                            <p className="text-xs text-emerald-500 font-bold">+40 Reward Points එකතු විය!</p>
                            <button
                              type="button"
                              onClick={() => {
                                setQuizCompleted(false);
                                setCurrentQuizIndex(0);
                                setSelectedQuizOption(null);
                                setQuizScore(0);
                              }}
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="px-6 py-3 rounded-xl text-slate-950 font-black text-xs shadow-lg cursor-pointer"
                            >
                              නැවත උත්සාහ කරන්න (Retake Quiz)
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Leaderboard */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <Award className="w-5 h-5 text-amber-500" />
                          <span>Top 10 Leaderboard</span>
                        </h3>
                        <div className="space-y-3">
                          {leaderboard.map(lb => (
                            <div key={lb.rank} className={`p-3.5 rounded-2xl border flex justify-between items-center text-xs ${
                              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                            }`}>
                              <div className="flex items-center gap-3">
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center font-black ${
                                  lb.rank === 1 ? 'bg-amber-400 text-black' : lb.rank === 2 ? 'bg-slate-300 text-black' : 'bg-slate-800 text-white'
                                }`}>
                                  {lb.rank}
                                </span>
                                <div>
                                  <h5 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{lb.name}</h5>
                                  <span className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{lb.batch}</span>
                                </div>
                              </div>
                              <span className="font-black text-amber-500">{lb.score}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* AUDIO PODCASTS / MINI PODCAST PLAYER TAB */}
                {activeTab === 'podcasts' && (
                  <div className="space-y-8 w-full max-w-4xl mx-auto">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <Radio className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                        <span>ශ්‍රව්‍ය පාඩම් සාරාංශ සහ Podcast Mode (Audio Podcasts)</span>
                      </h2>
                      <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        ගමන් බිමන් යන විට හෝ නිදාගැනීමට ප්‍රථම අසාගත හැකි කෙටි පාඩම් සාරාංශ.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {podcasts.map(pod => (
                        <div key={pod.id} className={`p-6 rounded-3xl border space-y-4 shadow-xl flex flex-col justify-between ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}>
                          <div className="space-y-2">
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 border border-cyan-500/35">
                              {pod.category} • {pod.duration}
                            </span>
                            <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{pod.title}</h3>
                          </div>

                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={() => setPlayingPodcast(playingPodcast?.id === pod.id ? null : pod)}
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="w-full py-3 rounded-xl text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                            >
                              {playingPodcast?.id === pod.id ? (
                                <>
                                  <Volume2 className="w-4 h-4 animate-pulse" />
                                  <span>Audio වාදනය වෙමින් පවතී... (Pause)</span>
                                </>
                              ) : (
                                <>
                                  <Play className="w-4 h-4 fill-current" />
                                  <span>Podcast අසන්න (Play Audio)</span>
                                </>
                              )}
                            </button>
                            {playingPodcast?.id === pod.id && (
                              <audio controls autoPlay className="w-full mt-3 h-10">
                                <source src={pod.audioUrl} type="audio/ogg" />
                                Your browser does not support the audio element.
                              </audio>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* STUDENT PROFILE, ATTENDANCE HISTORY & INTERACTIVE PROGRESS CHARTS TAB */}
                {activeTab === 'profile' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <User style={{ color: lmsBrandConfig.primaryColor }} className="w-6 h-6 flex-shrink-0" />
                        <span>ශිෂ්‍ය ගිණුම, පැමිණීම සහ කාර්ය සාධන ප්‍රස්ථාර (Profile, Attendance & Progress Charts)</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <div className="text-center space-y-3">
                          <div 
                            style={{ borderColor: lmsBrandConfig.primaryColor, backgroundColor: `${lmsBrandConfig.primaryColor}20`, color: lmsBrandConfig.primaryColor }}
                            className="w-20 h-20 rounded-full border-2 flex items-center justify-center mx-auto shadow-lg"
                          >
                            <User className="w-10 h-10" />
                          </div>
                          <div>
                            <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{studentProfile.name}</h3>
                            <p style={{ color: lmsBrandConfig.primaryColor }} className="text-xs font-bold">{studentProfile.studentId} • {studentProfile.batch}</p>
                          </div>
                        </div>

                        {/* Referral Code Box */}
                        <div className={`p-4 rounded-2xl border text-center space-y-2 ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-300'
                        }`}>
                          <span className={`text-[10px] font-bold uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>ඔබේ රෙෆරල් කෝඩ් එක (Referral Code):</span>
                          <div className="text-sm font-black text-amber-500 tracking-wider font-mono">{studentProfile.referralCode}</div>
                          <p className={`text-[10px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>මෙම කෝඩ් එක මිතුරෙකුට දී මසක පන්ති ගාස්තුවෙන් වට්ටම් ලබාගන්න!</p>
                        </div>

                        <div className="space-y-3 pt-2">
                          <div>
                            <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>නම (Name):</label>
                            <input
                              type="text"
                              value={studentProfile.name}
                              onChange={e => setStudentProfile({ ...studentProfile, name: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                              }`}
                            />
                          </div>

                          <div>
                            <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>දුරකථන අංකය (Phone):</label>
                            <input
                              type="text"
                              value={studentProfile.phone}
                              onChange={e => setStudentProfile({ ...studentProfile, phone: e.target.value })}
                              className={`w-full px-3.5 py-2.5 rounded-xl text-xs border focus:outline-none ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                              }`}
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-amber-400 mb-1">ටියුට් එවන ලිපිනය (Tute Delivery Address):</label>
                            <textarea
                              rows={3}
                              value={studentProfile.address}
                              onChange={e => setStudentProfile({ ...studentProfile, address: e.target.value })}
                              className={`w-full p-3 rounded-xl text-xs border focus:outline-none ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'
                              }`}
                            ></textarea>
                            <p className="text-[10px] text-slate-500 mt-1">සර් විසින් මුද්‍රිත ටියුට් (Tutes) තැපැල් කරන ලිපිනය මෙයයි.</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        {/* 5. INTERACTIVE VISUAL PERFORMANCE CHARTS */}
                        <div className={`p-6 rounded-3xl border space-y-5 shadow-xl ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                            <h3 className={`text-lg font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                              <Activity className="w-5 h-5 text-amber-400 flex-shrink-0" />
                              <span>Interactive Monthly Score & Progress Chart</span>
                            </h3>
                            <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-500/20 text-emerald-400">
                              Target Benchmark: {progressMetrics.targetBenchmark}%
                            </span>
                          </div>

                          {/* Teacher Remark Banner */}
                          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
                            <span className="font-extrabold text-amber-400 block">Teacher's Performance Note ({lmsBrandConfig.teacherName}):</span>
                            <p className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>{progressMetrics.teacherRemark}</p>
                          </div>

                          {/* Visual Bar Chart of Monthly Scores */}
                          <div className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'}`}>
                            <p className="text-xs font-bold text-slate-400 mb-4">Monthly Paper & Exam Score Trend (මාසික ලකුණු ප්‍රගතිය %):</p>
                            <div className="grid grid-cols-5 gap-3 items-end h-44 pt-4">
                              {progressMetrics.monthlyScores.map((ms, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-end h-full gap-2 group">
                                  <span className="text-xs font-black text-amber-400">{ms.score}%</span>
                                  <div className="w-full max-w-[44px] bg-slate-800 rounded-t-xl h-32 flex items-end overflow-hidden relative">
                                    <div
                                      style={{
                                        height: `${ms.score}%`,
                                        backgroundColor: ms.score >= progressMetrics.targetBenchmark ? '#10b981' : lmsBrandConfig.primaryColor
                                      }}
                                      className="w-full rounded-t-xl transition-all duration-700 group-hover:opacity-85"
                                    />
                                  </div>
                                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>{ms.month}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Topic Mastery Progress Bars */}
                          <div className="space-y-3">
                            <h4 className={`text-xs font-extrabold uppercase tracking-wider ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                              Syllabus Topic Mastery (විෂය කොටස් අනුව දක්ෂතාවය):
                            </h4>
                            {progressMetrics.topicMastery.map((tm, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex justify-between text-xs font-bold">
                                  <span className={theme === 'dark' ? 'text-slate-200' : 'text-slate-800'}>{tm.topic}</span>
                                  <span className={tm.mastery >= 80 ? 'text-emerald-400' : 'text-amber-400'}>{tm.mastery}%</span>
                                </div>
                                <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                                  <div
                                    style={{ width: `${tm.mastery}%`, backgroundColor: tm.mastery >= 80 ? '#10b981' : lmsBrandConfig.primaryColor }}
                                    className="h-full rounded-full transition-all duration-500"
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* 1. STUDENT ATTENDANCE LOGS & DIGITAL BADGE */}
                        <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}>
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                            <div>
                              <h3 className={`text-lg font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                                <span>Live Zoom Attendance History ({attendancePercentage}%)</span>
                              </h3>
                              <p className="text-xs text-slate-400">Badge Unlock Threshold: {attendanceConfig.badgeThreshold}%</p>
                            </div>
                            {isBadgeUnlocked && (
                              <button
                                type="button"
                                onClick={() => setShowBadgeModal(true)}
                                style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                                className="px-4 py-2 rounded-xl text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md cursor-pointer"
                              >
                                <Award className="w-4 h-4" />
                                <span>Open Digital Attendance Badge</span>
                              </button>
                            )}
                          </div>

                          <div className="space-y-2 max-h-56 overflow-y-auto">
                            {studentAttendanceRecords.map(rec => (
                              <div key={rec.id} className={`p-3 rounded-2xl border flex justify-between items-center text-xs ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                              }`}>
                                <div>
                                  <span className={`font-bold block ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{rec.sessionTitle}</span>
                                  <span className="text-[11px] text-slate-500">{rec.date}</span>
                                </div>
                                <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                                  rec.status === 'Present' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                }`}>
                                  {rec.status}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* DIGITAL ATTENDANCE HONOR BADGE MODAL */}
                {showBadgeModal && (
                  <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 border-2 border-amber-400/60 rounded-3xl max-w-md w-full p-8 text-center space-y-5 shadow-2xl">
                      <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400 flex items-center justify-center mx-auto shadow-lg">
                        <Award className="w-10 h-10 text-amber-400" />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-amber-400 text-slate-950">
                        Verified Digital Honor Badge
                      </span>
                      <h3 className="text-xl font-black text-white">{attendanceConfig.badgeTitle}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{attendanceConfig.badgeMessage}</p>
                      <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-1">
                        <p className="text-sm font-extrabold text-amber-400">{studentProfile.name}</p>
                        <p className="text-xs text-slate-400">{studentProfile.studentId} • Attendance: {attendancePercentage}%</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setShowBadgeModal(false)}
                        className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs cursor-pointer"
                      >
                        Close Badge
                      </button>
                    </div>
                  </div>
                )}

                {/* ASSIGNMENTS & PDF UPLOAD TAB */}
                {activeTab === 'assignments' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <FileCheck style={{ color: lmsBrandConfig.primaryColor }} className="w-6 h-6 flex-shrink-0" />
                        <span>PDF Answer Sheet Upload සහ AI Marking Marksheet</span>
                      </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          ලියූ පිළිතුරු පත්‍රය (PDF) Upload කරන්න
                        </h3>

                        {uploadSuccessMsg && (
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold text-center">
                            {uploadSuccessMsg}
                          </div>
                        )}

                        <form onSubmit={handleStudentPdfUpload} className="space-y-3">
                          <div>
                            <label className={`block text-xs font-semibold mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>PDF File තෝරන්න (Direct from Device):</label>
                            <input
                              type="file"
                              accept=".pdf"
                              required
                              onChange={e => setUploadPdfFile(e.target.files[0])}
                              className={`w-full text-xs p-2 rounded-xl border ${
                                theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-300 text-slate-800'
                              }`}
                            />
                          </div>

                          <button
                            type="submit"
                            style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                            className="w-full py-3.5 rounded-xl text-slate-950 font-black text-xs transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-90"
                          >
                            <Upload className="w-4 h-4" />
                            <span>PDF එක යොමු කරන්න</span>
                          </button>
                        </form>
                      </div>

                      <div className={`lg:col-span-2 p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          යොමු කළ Papers සහ AI Marksheet ලැයිස්තුව
                        </h3>

                        <div className="space-y-4">
                          {assignments.map(asgn => (
                            <div key={asgn.id} className={`p-5 rounded-2xl border space-y-3 ${
                              theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                            }`}>
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                                <div>
                                  <span style={{ color: lmsBrandConfig.primaryColor }} className="text-xs font-bold">{asgn.courseName}</span>
                                  <h4 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{asgn.title}</h4>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/35 whitespace-nowrap">
                                  {asgn.status}
                                </span>
                              </div>

                              {asgn.marks && (
                                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/35 flex justify-between items-center">
                                  <span className="text-xs font-bold text-amber-500">ලබාගත් ලකුණු:</span>
                                  <span className="text-lg font-black text-amber-500">{asgn.marks}</span>
                                </div>
                              )}

                              {asgn.feedback && (
                                <p className={`text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                                  <span style={{ color: lmsBrandConfig.primaryColor }} className="font-bold">AI / Teacher Feedback:</span> {asgn.feedback}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* UNLOCKED MONTH LESSONS MODAL */}
                {selectedCourse && (
                  <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
                    <div className={`border rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                    }`}>
                      <div className={`p-4 sm:p-6 border-b flex justify-between items-center gap-2 ${
                        theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-300'
                      }`}>
                        <div className="min-w-0">
                          <h2 className={`text-base sm:text-xl font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{selectedCourse.title}</h2>
                          <p style={{ color: lmsBrandConfig.primaryColor }} className="text-xs">{selectedCourse.activeMonth?.monthName}</p>
                        </div>
                        <button type="button" onClick={() => setSelectedCourse(null)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer flex-shrink-0">✕</button>
                      </div>

                      <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
                        {selectedCourse.activeMonth?.lessons.map((lesson) => (
                          <div key={lesson.id} className={`p-4 rounded-2xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                          }`}>
                            <div className="space-y-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/35">
                                  {lesson.videoPlatform || 'Video'}
                                </span>
                                <h4 className={`text-sm sm:text-base font-bold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{lesson.title}</h4>
                              </div>
                              <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{lesson.summary}</p>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                              {lesson.hasPdf && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedCourse(null);
                                    setActivePdfViewerModal({ lesson });
                                  }}
                                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                                >
                                  <FileText style={{ color: lmsBrandConfig.primaryColor }} className="w-3.5 h-3.5" />
                                  <span>View Tute</span>
                                </button>
                              )}

                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedCourse(null);
                                  setActiveVideoModal({ lesson });
                                }}
                                style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                                className="px-4 py-2 rounded-xl text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md cursor-pointer hover:opacity-90"
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* IN-APP PDF VIEWER MODAL */}
                {activePdfViewerModal && (
                  <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full h-[85vh] overflow-hidden flex flex-col shadow-2xl">
                      <div className="p-4 px-6 border-b border-slate-800 flex justify-between items-center bg-slate-950 gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <FileText style={{ color: lmsBrandConfig.primaryColor }} className="w-5 h-5 flex-shrink-0" />
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-base font-bold text-white truncate">{activePdfViewerModal.lesson.pdfName || 'Tute Notes'}</h3>
                            <p className="text-xs text-slate-400 truncate">{activePdfViewerModal.lesson.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <a
                            href={activePdfViewerModal.lesson.pdfUrl}
                            download
                            style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                            className="px-3.5 py-1.5 rounded-xl text-slate-950 font-black text-xs flex items-center gap-1.5"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download</span>
                          </a>
                          <button type="button" onClick={() => setActivePdfViewerModal(null)} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer">✕</button>
                        </div>
                      </div>
                      <div className="w-full flex-1 bg-slate-950">
                        <iframe 
                          src={activePdfViewerModal.lesson.pdfUrl} 
                          title="PDF Viewer" 
                          className="w-full h-full border-0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                )}

                {/* VIDEO PLAYER MODAL */}
                {activeVideoModal && (
                  <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4">
                    <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-5xl w-full overflow-hidden flex flex-col shadow-2xl">
                      <div className="p-4 px-6 border-b border-slate-800 flex justify-between items-center bg-slate-950 gap-2">
                        <div className="min-w-0">
                          <span style={{ color: lmsBrandConfig.primaryColor }} className="text-[10px] font-bold uppercase">{activeVideoModal.lesson.videoPlatform || 'Video Recording'}</span>
                          <h3 className="text-sm sm:text-base font-bold text-white truncate">{activeVideoModal.lesson.title}</h3>
                        </div>
                        <button type="button" onClick={() => setActiveVideoModal(null)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer flex-shrink-0">✕ Close</button>
                      </div>
                      <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                        {activeVideoModal.lesson.videoPlatform === 'Zoom' ? (
                          <div className="p-8 text-center space-y-4">
                            <Tv style={{ color: lmsBrandConfig.primaryColor }} className="w-16 h-16 mx-auto" />
                            <h4 className="text-xl font-bold text-white">Zoom Session Recording</h4>
                            <p className="text-xs text-slate-400 max-w-md mx-auto">
                              මෙම වීඩියෝව Zoom සජීවී පන්තියේ රෙකෝඩින් එකකි. පල්ලෙහා Button එක ක්ලික් කර Zoom Portal එකෙන් ආරක්ෂිතව බලන්න.
                            </p>
                            <a
                              href={activeVideoModal.lesson.videoUrl}
                              target="_blank"
                              rel="noreferrer"
                              style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-slate-950 font-black text-xs shadow-lg"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Zoom Recording එක බලන්න</span>
                            </a>
                          </div>
                        ) : (
                          <iframe className="w-full h-full" src={activeVideoModal.lesson.videoUrl} title="Lesson Video" allowFullScreen></iframe>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* BANK SLIP UPLOAD PAYMENT MODAL (CARD PAYMENTS REMOVED COMPLETELY) */}
                {paymentModal && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <div className={`border rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                    }`}>
                      <div className="flex justify-between items-start border-b pb-4 gap-2">
                        <div>
                          <h3 className={`text-lg sm:text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>මාසික ගෙවීම් (Bank Slip Upload Only)</h3>
                          <p style={{ color: lmsBrandConfig.primaryColor }} className="text-xs">{paymentModal.course.title}</p>
                        </div>
                        <button type="button" onClick={() => setPaymentModal(null)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer">✕</button>
                      </div>

                      {paymentSuccessMsg ? (
                        <div className="p-6 rounded-2xl bg-emerald-500/20 text-center space-y-2">
                          <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                          <h4 className="text-lg font-bold text-white">{paymentSuccessMsg}</h4>
                        </div>
                      ) : (
                        <form onSubmit={handlePaymentSubmit} className="space-y-4">
                          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/35 flex justify-between items-center">
                            <span className="text-xs font-bold text-amber-500">ගාස්තුව (Monthly Fee):</span>
                            <span className="text-2xl font-black text-amber-500">Rs. {paymentModal.course.feePerMonth}/=</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                            <label className="block text-xs font-bold text-amber-400">බැංකු රිසිට්පත (Bank Slip JPG/PDF) Upload කරන්න:</label>
                            <input
                              type="file"
                              accept=".jpg,.jpeg,.png,.pdf"
                              required
                              onChange={e => setBankSlipFile(e.target.files[0])}
                              className="w-full text-xs text-slate-300"
                            />
                            <p className="text-[11px] text-slate-500">සර් විසින් රිසිට්පත තහවුරු කළ පසු අදාළ මාසයේ වීඩියෝ ස්වයංක්‍රීයව අගුළු හැරේ.</p>
                          </div>

                          <button
                            type="submit"
                            style={{ backgroundColor: lmsBrandConfig.primaryColor }}
                            className="w-full py-3.5 rounded-xl text-slate-950 font-black text-sm shadow-lg cursor-pointer hover:opacity-90"
                          >
                            බැංකු රිසිට්පත යොමු කරන්න
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                )}

              </div>
            )}

            {/* STRICT ADMIN PORTAL */}
            {role === 'admin' && isAdminAuthenticated && !isDevAuthenticated && (
              <div className="space-y-8 w-full">

                {/* ADMIN DASHBOARD (WITH LIVE ZOOM CLASS SCHEDULER FOR TEACHER!) */}
                {activeTab === 'admin-dash' && (
                  <div className="space-y-8 w-full">
                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
                      theme === 'dark' ? 'border-slate-800' : 'border-slate-300'
                    }`}>
                      <div>
                        <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <ShieldCheck className="w-6 h-6 text-purple-500 flex-shrink-0" />
                          <span>{lmsBrandConfig.teacherName} - ඇඩ්මින් පාලන පුවරුව</span>
                        </h2>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          සජීවී Zoom පන්ති කාලසටහන්, බැනර් වෙනස් කිරීම, රිසිට්පත් පරීක්ෂාව සහ AI Paper Evaluator.
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => setIsEditingZoom(true)}
                          className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg cursor-pointer"
                        >
                          <Tv className="w-4 h-4" />
                          <span>Zoom Live Class සකසන්න</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingBanner(true)}
                          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-2 shadow-lg cursor-pointer"
                        >
                          <Image className="w-4 h-4" />
                          <span>බැනරය වෙනස් කරන්න</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setEditingCourseId(null);
                            setNewClassFormData({
                              batchYear: '2027 A/L',
                              category: 'Theory',
                              monthName: '2027 දෙසැම්බර් (December Class)',
                              courseTitle: '',
                              lessonTitle: '',
                              duration: '2 Hours 30 Mins',
                              feePerMonth: 2500,
                              videoPlatform: 'YouTube',
                              videoUrl: '',
                              hasPdf: false,
                              pdfFileName: '',
                              pdfFileUrl: '',
                              color1: '#0f172a',
                              color2: '#7c3aed',
                              summary: 'විෂය නිර්දේශයේ අදාළ පරිච්ඡේදයේ සියලුම අනුකොටස් සවිස්තරව.'
                            });
                            setShowAddClassModal(true);
                          }}
                          className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
                        >
                          <Plus className="w-4 h-4" />
                          <span>+ නව පන්තියක් එකතු කරන්න</span>
                        </button>
                      </div>
                    </div>

                    {/* Current Live Zoom Class Card in Admin */}
                    <div className={`p-6 rounded-3xl border shadow-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${
                      theme === 'dark' ? 'bg-slate-900 border-indigo-500/30' : 'bg-white border-indigo-300'
                    }`}>
                      <div className="space-y-1">
                        <span className="text-[11px] font-black uppercase text-indigo-500">දැනට සකසා ඇති සජීවී Zoom පන්තිය (Current Live Zoom Class)</span>
                        <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{liveZoomConfig.title}</h3>
                        <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Zoom Link: <span className="text-indigo-500 underline">{liveZoomConfig.zoomUrl}</span> • දිනය/වේලාව: {new Date(liveZoomConfig.targetDateTime).toLocaleString()}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsEditingZoom(true)}
                        className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer hover:bg-indigo-500 whitespace-nowrap"
                      >
                        වෙනස් කරන්න (Edit Live Zoom)
                      </button>
                    </div>

                    {/* Admin Metrics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      <div className={`p-6 rounded-3xl border space-y-1 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>මුළු පන්ති සංඛ්‍යාව</p>
                        <h3 className={`text-2xl sm:text-3xl font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{courses.length} Active Courses</h3>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-1 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>තහවුරු කිරීමට ඇති Slips</p>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-amber-500">
                          {pendingPayments.filter(p => p.status === 'Pending Verification').length} Pending
                        </h3>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-1 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>ලියාපදිංචි ළමයින් ගණන</p>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-500">1,240 Students</h3>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-1 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <p className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>මාසික ආදායම (Estimate)</p>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-emerald-500">Rs. 310,000/=</h3>
                      </div>
                    </div>
                  </div>
                )}

                {/* ADMIN 1: ATTENDANCE & DIGITAL BADGE MANAGER */}
                {activeTab === 'admin-attendance' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <CheckSquare className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span>Automated Attendance & Digital Badge Settings (Admin Control)</span>
                      </h2>
                      <p className="text-xs text-slate-400">Zoom සජීවී පැමිණීම ස්වයංක්‍රීයව සටහන් වීම පාලනය කිරීම, පැමිණීම වෙනස් කිරීම සහ Digital Badge සංස්කරණය.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Badge & Auto-Attendance Config Editor */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          01. Edit Attendance Rules & Digital Badge
                        </h3>

                        <label className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800 cursor-pointer">
                          <span className="text-xs font-bold text-slate-200">Auto-Log Attendance when Student clicks "Join Zoom Live"</span>
                          <input
                            type="checkbox"
                            checked={attendanceConfig.autoTrackZoom}
                            onChange={e => setAttendanceConfig({ ...attendanceConfig, autoTrackZoom: e.target.checked })}
                          />
                        </label>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Total Sessions Held:</label>
                            <input
                              type="number"
                              min={1}
                              value={attendanceConfig.totalSessionsHeld}
                              onChange={e => setAttendanceConfig({ ...attendanceConfig, totalSessionsHeld: Number(e.target.value) })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Badge Threshold (%):</label>
                            <input
                              type="number"
                              min={10}
                              max={100}
                              value={attendanceConfig.badgeThreshold}
                              onChange={e => setAttendanceConfig({ ...attendanceConfig, badgeThreshold: Number(e.target.value) })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Digital Badge Title:</label>
                          <input
                            type="text"
                            value={attendanceConfig.badgeTitle}
                            onChange={e => setAttendanceConfig({ ...attendanceConfig, badgeTitle: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Badge Description / Citation:</label>
                          <textarea
                            rows={2}
                            value={attendanceConfig.badgeMessage}
                            onChange={e => setAttendanceConfig({ ...attendanceConfig, badgeMessage: e.target.value })}
                            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                      </div>

                      {/* Manual Attendance Entry & Logs Editor */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          02. Student Attendance Logs (Toggle Present / Absent)
                        </h3>

                        <form
                          onSubmit={e => {
                            e.preventDefault();
                            if (!newAttendanceEntry.sessionTitle.trim()) return;
                            setAttendanceLogs(prev => [{
                              id: 'att-' + Date.now(),
                              studentId: 'ST-2027-8841',
                              studentName: newAttendanceEntry.studentName,
                              sessionTitle: newAttendanceEntry.sessionTitle,
                              date: new Date().toISOString().split('T')[0],
                              status: newAttendanceEntry.status
                            }, ...prev]);
                            setNewAttendanceEntry({ ...newAttendanceEntry, sessionTitle: '' });
                          }}
                          className="flex flex-col sm:flex-row gap-2"
                        >
                          <input
                            type="text"
                            required
                            placeholder="Session Name (eg: 09. Revision Zoom)"
                            value={newAttendanceEntry.sessionTitle}
                            onChange={e => setNewAttendanceEntry({ ...newAttendanceEntry, sessionTitle: e.target.value })}
                            className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                          <button type="submit" className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold cursor-pointer">
                            + Log Present
                          </button>
                        </form>

                        <div className="space-y-2 max-h-72 overflow-y-auto">
                          {attendanceLogs.map(log => (
                            <div key={log.id} className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center gap-2 text-xs">
                              <div className="min-w-0">
                                <p className="font-bold text-white truncate">{log.studentName}</p>
                                <p className="text-[11px] text-slate-400 truncate">{log.sessionTitle} • {log.date}</p>
                              </div>
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                <button
                                  type="button"
                                  onClick={() => setAttendanceLogs(prev => prev.map(item =>
                                    item.id === log.id ? { ...item, status: item.status === 'Present' ? 'Absent' : 'Present' } : item
                                  ))}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold cursor-pointer ${
                                    log.status === 'Present' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                  }`}
                                >
                                  {log.status}
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setAttendanceLogs(prev => prev.filter(item => item.id !== log.id))}
                                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-red-600 text-slate-400 hover:text-white cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ADMIN 2: SMS & WHATSAPP NOTIFICATION GATEWAY & BROADCAST */}
                {activeTab === 'admin-notifications' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <Smartphone className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span>SMS & WhatsApp Notification Gateway (Admin Control)</span>
                      </h2>
                      <p className="text-xs text-slate-400">ස්වයංක්‍රීය පණිවුඩ Templates සංස්කරණය සහ සිසුන්ට ක්ෂණික WhatsApp/SMS පණිවුඩ යැවීම.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Edit Auto-Message Templates */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          01. Gateway Settings & Auto-Templates
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">WhatsApp Business Number:</label>
                            <input
                              type="text"
                              value={notificationConfig.whatsappNumber}
                              onChange={e => setNotificationConfig({ ...notificationConfig, whatsappNumber: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">SMS Sender ID:</label>
                            <input
                              type="text"
                              value={notificationConfig.smsSenderId}
                              onChange={e => setNotificationConfig({ ...notificationConfig, smsSenderId: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                        </div>

                        <label className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-xs text-slate-200">
                          <span>Auto-send WhatsApp when Bank Slip is Approved</span>
                          <input
                            type="checkbox"
                            checked={notificationConfig.autoSendOnSlipApproval}
                            onChange={e => setNotificationConfig({ ...notificationConfig, autoSendOnSlipApproval: e.target.checked })}
                          />
                        </label>

                        <div>
                          <label className="block text-xs text-amber-400 font-bold mb-1">
                            Bank Slip Approval Template (Placeholders: {'{studentName}'}, {'{monthName}'}):
                          </label>
                          <textarea
                            rows={3}
                            value={notificationConfig.slipApprovedTemplate}
                            onChange={e => setNotificationConfig({ ...notificationConfig, slipApprovedTemplate: e.target.value })}
                            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs text-amber-400 font-bold mb-1">
                            Live Class Alert Template (Placeholders: {'{studentName}'}, {'{classTitle}'}, {'{zoomLink}'}):
                          </label>
                          <textarea
                            rows={2}
                            value={notificationConfig.liveClassTemplate}
                            onChange={e => setNotificationConfig({ ...notificationConfig, liveClassTemplate: e.target.value })}
                            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                      </div>

                      {/* Send Broadcast Alert */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          02. Broadcast Instant WhatsApp / SMS Alert
                        </h3>

                        {broadcastSentToast && (
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                            {broadcastSentToast}
                          </div>
                        )}

                        <form onSubmit={handleSendBroadcastNotification} className="space-y-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Channel:</label>
                            <select
                              value={broadcastForm.channel}
                              onChange={e => setBroadcastForm({ ...broadcastForm, channel: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            >
                              <option value="WhatsApp">WhatsApp Instant Message</option>
                              <option value="SMS">Bulk SMS Gateway</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Alert Heading:</label>
                            <input
                              type="text"
                              required
                              placeholder="eg: 2027 A/L Paper Class Notice"
                              value={broadcastForm.title}
                              onChange={e => setBroadcastForm({ ...broadcastForm, title: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Message Content:</label>
                            <textarea
                              rows={3}
                              required
                              placeholder="සිසුන් වෙත යැවිය යුතු පණිවුඩය මෙහි ලියන්න..."
                              value={broadcastForm.message}
                              onChange={e => setBroadcastForm({ ...broadcastForm, message: e.target.value })}
                              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>

                          <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-2 cursor-pointer"
                          >
                            <Send className="w-4 h-4" />
                            <span>Send Now to All Students</span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* ADMIN 3: Q&A DISCUSSION FORUM MODERATOR */}
                {activeTab === 'admin-forum' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <MessageSquare className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                        <span>Student Q&A Forum Moderation & Teacher Replies</span>
                      </h2>
                      <p className="text-xs text-slate-400">සිසුන්ගේ ප්‍රශ්න වලට නිල පිළිතුරු ලබා දීම, Pin කිරීම හෝ අනවශ්‍ය ප්‍රශ්න ඉවත් කිරීම.</p>
                    </div>

                    <div className="space-y-4">
                      {forumPosts.map(post => {
                        const draftValue = adminReplyDrafts[post.id] !== undefined ? adminReplyDrafts[post.id] : post.teacherReply;
                        return (
                          <div key={post.id} className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                            theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                          }`}>
                            <div className="flex flex-wrap justify-between items-center gap-2">
                              <div>
                                <span className="text-xs font-extrabold text-cyan-400">{post.lessonTag}</span>
                                <p className="text-[11px] text-slate-400">{post.studentName} • {post.timestamp}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() => setForumPosts(prev => prev.map(p => p.id === post.id ? { ...p, pinned: !p.pinned } : p))}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer ${
                                    post.pinned ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                                  }`}
                                >
                                  <Pin className="w-3.5 h-3.5" />
                                  <span>{post.pinned ? 'Pinned' : 'Pin Top'}</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setForumPosts(prev => prev.filter(p => p.id !== post.id))}
                                  className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>

                            <p className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Q: {post.question}</p>

                            <div className="space-y-2">
                              <label className="block text-xs font-bold text-emerald-400">Official Teacher Reply (Edit & Save):</label>
                              <textarea
                                rows={2}
                                value={draftValue}
                                onChange={e => setAdminReplyDrafts({ ...adminReplyDrafts, [post.id]: e.target.value })}
                                placeholder="සර්ගේ පිළිතුර මෙහි ලියන්න..."
                                className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                              />
                              <button
                                type="button"
                                onClick={() => handleAdminSaveForumReply(post.id)}
                                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer"
                              >
                                Save Official Reply
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* ADMIN 4: TIMED MOCK EXAM BUILDER & QUESTION EDITOR */}
                {activeTab === 'admin-exams' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <ClipboardList className="w-6 h-6 text-amber-400 flex-shrink-0" />
                        <span>Timed Mock Exam Builder & Editor (කාල සීමා සහිත විභාග සැකසීම)</span>
                      </h2>
                      <p className="text-xs text-slate-400">නව කාල සීමා සහිත විභාග නිර්මාණය කිරීම, කාලය (Minutes) වෙනස් කිරීම සහ MCQ ප්‍රශ්න එකතු/ඉවත් කිරීම.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Create New Timed Exam */}
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          if (!newExamForm.title.trim()) return;
                          const created = {
                            id: 'exam-' + Date.now(),
                            title: newExamForm.title,
                            batch: newExamForm.batch,
                            durationMinutes: Number(newExamForm.durationMinutes) || 15,
                            isActive: true,
                            description: newExamForm.description || 'Timed mock examination.',
                            questions: []
                          };
                          setMockExams(prev => [...prev, created]);
                          setSelectedAdminExamId(created.id);
                          setNewExamForm({ title: '', batch: '2027 A/L', durationMinutes: 15, description: '' });
                        }}
                        className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}
                      >
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          + Create New Timed Exam
                        </h3>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Exam Title:</label>
                          <input
                            type="text"
                            required
                            placeholder="eg: 2027 A/L Mock Test 02"
                            value={newExamForm.title}
                            onChange={e => setNewExamForm({ ...newExamForm, title: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Batch:</label>
                            <select
                              value={newExamForm.batch}
                              onChange={e => setNewExamForm({ ...newExamForm, batch: e.target.value })}
                              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            >
                              <option value="2027 A/L">2027 A/L</option>
                              <option value="2028 A/L">2028 A/L</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Duration (Mins):</label>
                            <input
                              type="number"
                              min={1}
                              required
                              value={newExamForm.durationMinutes}
                              onChange={e => setNewExamForm({ ...newExamForm, durationMinutes: e.target.value })}
                              className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Instructions:</label>
                          <textarea
                            rows={2}
                            value={newExamForm.description}
                            onChange={e => setNewExamForm({ ...newExamForm, description: e.target.value })}
                            className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                        <button type="submit" className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-black text-xs cursor-pointer">
                          Create Exam
                        </button>
                      </form>

                      {/* Edit Selected Exam & Add Questions */}
                      <div className={`lg:col-span-2 p-6 rounded-3xl border space-y-5 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <div className="flex flex-wrap gap-2 border-b pb-4 border-slate-800/40">
                          {mockExams.map(ex => (
                            <button
                              key={ex.id}
                              type="button"
                              onClick={() => setSelectedAdminExamId(ex.id)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold cursor-pointer ${
                                selectedAdminExamId === ex.id ? 'bg-purple-600 text-white' : 'bg-slate-950 text-slate-400 border border-slate-800'
                              }`}
                            >
                              {ex.title}
                            </button>
                          ))}
                        </div>

                        {(() => {
                          const targetExam = mockExams.find(ex => ex.id === selectedAdminExamId) || mockExams[0];
                          if (!targetExam) return null;
                          return (
                            <div className="space-y-5">
                              {/* Edit Exam Metadata */}
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                                <div className="sm:col-span-2">
                                  <label className="block text-[11px] text-slate-400 mb-1">Edit Exam Title:</label>
                                  <input
                                    type="text"
                                    value={targetExam.title}
                                    onChange={e => setMockExams(prev => prev.map(ex => ex.id === targetExam.id ? { ...ex, title: e.target.value } : ex))}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[11px] text-slate-400 mb-1">Duration (Minutes):</label>
                                  <input
                                    type="number"
                                    min={1}
                                    value={targetExam.durationMinutes}
                                    onChange={e => setMockExams(prev => prev.map(ex => ex.id === targetExam.id ? { ...ex, durationMinutes: Number(e.target.value) } : ex))}
                                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                              </div>

                              {/* Add New Question to Target Exam */}
                              <form
                                onSubmit={e => {
                                  e.preventDefault();
                                  if (!newExamQuestionForm.question.trim()) return;
                                  const newQ = {
                                    id: 'eq-' + Date.now(),
                                    question: newExamQuestionForm.question,
                                    options: [newExamQuestionForm.opt0, newExamQuestionForm.opt1, newExamQuestionForm.opt2, newExamQuestionForm.opt3],
                                    correct: Number(newExamQuestionForm.correct),
                                    explanation: newExamQuestionForm.explanation
                                  };
                                  setMockExams(prev => prev.map(ex => ex.id === targetExam.id ? { ...ex, questions: [...ex.questions, newQ] } : ex));
                                  setNewExamQuestionForm({ question: '', opt0: '', opt1: '', opt2: '', opt3: '', correct: 0, explanation: '' });
                                }}
                                className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3"
                              >
                                <h4 className="text-xs font-extrabold text-amber-400">+ Add Question to "{targetExam.title}"</h4>
                                <input
                                  type="text"
                                  required
                                  placeholder="ප්‍රශ්නය ඇතුළත් කරන්න..."
                                  value={newExamQuestionForm.question}
                                  onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, question: e.target.value })}
                                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                                />
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <input type="text" required placeholder="Option 1" value={newExamQuestionForm.opt0} onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, opt0: e.target.value })} className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
                                  <input type="text" required placeholder="Option 2" value={newExamQuestionForm.opt1} onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, opt1: e.target.value })} className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
                                  <input type="text" required placeholder="Option 3" value={newExamQuestionForm.opt2} onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, opt2: e.target.value })} className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
                                  <input type="text" required placeholder="Option 4" value={newExamQuestionForm.opt3} onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, opt3: e.target.value })} className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white" />
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <select
                                    value={newExamQuestionForm.correct}
                                    onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, correct: Number(e.target.value) })}
                                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                                  >
                                    <option value={0}>Correct: Option 1</option>
                                    <option value={1}>Correct: Option 2</option>
                                    <option value={2}>Correct: Option 3</option>
                                    <option value={3}>Correct: Option 4</option>
                                  </select>
                                  <input
                                    type="text"
                                    placeholder="Explanation (පැහැදිලි කිරීම)"
                                    value={newExamQuestionForm.explanation}
                                    onChange={e => setNewExamQuestionForm({ ...newExamQuestionForm, explanation: e.target.value })}
                                    className="px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                                  />
                                </div>
                                <button type="submit" className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-extrabold cursor-pointer">
                                  + Add Question
                                </button>
                              </form>

                              {/* Existing Questions List */}
                              <div className="space-y-2">
                                <h4 className="text-xs font-bold text-slate-400">Questions in Exam ({targetExam.questions.length}):</h4>
                                {targetExam.questions.map((q, idx) => (
                                  <div key={q.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex justify-between items-center gap-2 text-xs">
                                    <span className="text-white truncate">{idx + 1}. {q.question}</span>
                                    <button
                                      type="button"
                                      onClick={() => setMockExams(prev => prev.map(ex =>
                                        ex.id === targetExam.id ? { ...ex, questions: ex.questions.filter(item => item.id !== q.id) } : ex
                                      ))}
                                      className="p-1.5 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer flex-shrink-0"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                )}

                {/* ADMIN ANALYTICS & STUDENT PROGRESS CHART EDITOR (FEATURE 5) */}
                {activeTab === 'admin-analytics' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <BarChart2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                        <span>LMS Analytics & Financial Performance Dashboard</span>
                      </h2>
                      <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>මුළු ආදායම, බැච් අනුව ළමයි ලියාපදිංචිය සහ AI paper scores විශ්ලේෂණය.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className={`p-6 rounded-3xl border space-y-2 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Total Estimated Revenue</span>
                          <DollarSign className="w-5 h-5 text-emerald-500" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-emerald-500">Rs. 3,100,000</h3>
                        <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>+18% growth from last month</p>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-2 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Active Student Base</span>
                          <Users className="w-5 h-5 text-purple-500" />
                        </div>
                        <h3 className={`text-2xl sm:text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1,240 Students</h3>
                        <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>850 in 2027 A/L | 390 in 2028 A/L</p>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-2 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <div className="flex justify-between items-center">
                          <span className={`text-xs font-bold ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Avg AI Paper Score</span>
                          <Award className="w-5 h-5 text-amber-500" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black text-amber-500">78.4 / 100</h3>
                        <p className={`text-[11px] ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>High engagement in Essay tests</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h4 className={`text-sm font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <PieChart className="w-4 h-4 text-amber-500" />
                          <span>Batch Enrollment Distribution</span>
                        </h4>
                        <div className="space-y-3 pt-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className={`font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>2027 A/L Batch (Theory & Paper Classes)</span>
                              <span className="text-amber-500 font-bold">68% (850 Students)</span>
                            </div>
                            <div className={`w-full h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-200'}`}>
                              <div className="h-full bg-amber-500" style={{ width: '68%' }}></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className={`font-bold ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>2028 A/L Batch (Foundation)</span>
                              <span className="text-purple-500 font-bold">32% (390 Students)</span>
                            </div>
                            <div className={`w-full h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-200'}`}>
                              <div className="h-full bg-purple-500" style={{ width: '32%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h4 className={`text-sm font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          <TrendingUp className="w-4 h-4 text-emerald-500" />
                          <span>Monthly Revenue Collection Breakdown</span>
                        </h4>
                        <div className="space-y-3 pt-2">
                          <div className={`p-3 rounded-xl border flex justify-between items-center text-xs gap-2 ${
                            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                          }`}>
                            <span className={`font-bold truncate ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>November 2027 Class Fees</span>
                            <span className="font-black text-emerald-500 whitespace-nowrap">Rs. 1,250,000</span>
                          </div>
                          <div className={`p-3 rounded-xl border flex justify-between items-center text-xs gap-2 ${
                            theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-300'
                          }`}>
                            <span className={`font-bold truncate ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>December 2027 Advance Bookings</span>
                            <span className="font-black text-emerald-500 whitespace-nowrap">Rs. 980,000</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 5. ADMIN EDITOR FOR STUDENT INTERACTIVE PROGRESS CHARTS */}
                    <div className={`p-6 rounded-3xl border space-y-5 shadow-xl ${
                      theme === 'dark' ? 'bg-slate-900 border-amber-500/30' : 'bg-white border-amber-300'
                    }`}>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b pb-3 border-slate-800/40">
                        <div>
                          <h3 className={`text-base font-extrabold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                            <Activity className="w-5 h-5 text-amber-400" />
                            <span>Edit Student Progress Charts & Benchmarks (ශිෂ්‍ය ප්‍රගති ප්‍රස්ථාර සංස්කරණය)</span>
                          </h3>
                          <p className="text-xs text-slate-400">මෙහි සිදු කරන වෙනස්කම් සිසුන්ගේ Profile & Charts පිටුවේ සජීවීව යාවත්කාලීන වේ.</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Target Benchmark Score (%):</label>
                            <input
                              type="number"
                              min={10}
                              max={100}
                              value={progressMetrics.targetBenchmark}
                              onChange={e => setProgressMetrics({ ...progressMetrics, targetBenchmark: Number(e.target.value) })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Teacher's Performance Remark:</label>
                            <textarea
                              rows={3}
                              value={progressMetrics.teacherRemark}
                              onChange={e => setProgressMetrics({ ...progressMetrics, teacherRemark: e.target.value })}
                              className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                        </div>

                        <div className="space-y-3">
                          <label className="block text-xs font-bold text-amber-400">Edit Monthly Score Trend Bars (%):</label>
                          <div className="grid grid-cols-5 gap-2">
                            {progressMetrics.monthlyScores.map((ms, idx) => (
                              <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                                <span className="text-[11px] font-bold text-slate-400 block">{ms.month}</span>
                                <input
                                  type="number"
                                  min={0}
                                  max={100}
                                  value={ms.score}
                                  onChange={e => {
                                    const val = Math.min(100, Math.max(0, Number(e.target.value)));
                                    const updated = [...progressMetrics.monthlyScores];
                                    updated[idx].score = val;
                                    setProgressMetrics({ ...progressMetrics, monthlyScores: updated });
                                  }}
                                  className="w-full px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-center text-xs font-bold text-amber-400"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ADMIN PODCAST MANAGER */}
                {activeTab === 'admin-podcasts' && (
                  <div className="space-y-6 w-full max-w-4xl mx-auto">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold flex items-center gap-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        <Radio className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                        <span>Admin Podcast Manager (පොඩ්කාස්ට් ශ්‍රව්‍ය පාඩම් එකතු කිරීම)</span>
                      </h2>
                      <p className="text-xs text-slate-400">නව ශ්‍රව්‍ය පාඩම් (Podcasts) එකතු කිරීම සහ ඉවත් කිරීම.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <form
                        onSubmit={e => {
                          e.preventDefault();
                          if (!newPodcastForm.title.trim()) return;
                          const created = {
                            id: 'pod-' + Date.now(),
                            title: newPodcastForm.title,
                            duration: newPodcastForm.duration,
                            category: newPodcastForm.category,
                            audioUrl: newPodcastForm.audioUrl
                          };
                          setPodcasts(prev => [created, ...prev]);
                          setNewPodcastForm({
                            title: '',
                            duration: '10:00 Mins',
                            category: 'Theory Audio',
                            audioUrl: 'https://actions.google.com/sounds/v1/ambiences/daytime_forest_bonfire.ogg'
                          });
                          setPodcastAddedMsg('පොඩ්කාස්ට් එක සාර්ථකව එකතු කරන ලදී!');
                          setTimeout(() => setPodcastAddedMsg(''), 3000);
                        }}
                        className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                        }`}
                      >
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          + Add New Audio Podcast
                        </h3>

                        {podcastAddedMsg && (
                          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold">
                            {podcastAddedMsg}
                          </div>
                        )}

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Podcast Title:</label>
                          <input
                            type="text"
                            required
                            placeholder="eg: Episode 03: පොළොන්නරු යුගය සාරාංශය"
                            value={newPodcastForm.title}
                            onChange={e => setNewPodcastForm({ ...newPodcastForm, title: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Duration:</label>
                            <input
                              type="text"
                              required
                              value={newPodcastForm.duration}
                              onChange={e => setNewPodcastForm({ ...newPodcastForm, duration: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-xs text-slate-400 mb-1">Category:</label>
                            <select
                              value={newPodcastForm.category}
                              onChange={e => setNewPodcastForm({ ...newPodcastForm, category: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                            >
                              <option value="Theory Audio">Theory Audio</option>
                              <option value="Revision Audio">Revision Audio</option>
                              <option value="Exam Tips">Exam Tips</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs text-slate-400 mb-1">Audio URL (MP3 / OGG):</label>
                          <input
                            type="url"
                            required
                            value={newPodcastForm.audioUrl}
                            onChange={e => setNewPodcastForm({ ...newPodcastForm, audioUrl: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <button type="submit" className="w-full py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black text-xs cursor-pointer shadow-lg">
                          Publish Podcast
                        </button>
                      </form>

                      {/* Existing Podcasts List with Delete */}
                      <div className={`p-6 rounded-3xl border space-y-4 shadow-xl ${
                        theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                      }`}>
                        <h3 className={`text-base font-extrabold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          Published Podcasts ({podcasts.length})
                        </h3>

                        <div className="space-y-3 max-h-80 overflow-y-auto">
                          {podcasts.map(pod => (
                            <div key={pod.id} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 flex justify-between items-center gap-2 text-xs">
                              <div className="min-w-0">
                                <p className="font-bold text-white truncate">{pod.title}</p>
                                <span className="text-[10px] text-cyan-400 font-semibold">{pod.category} • {pod.duration}</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => setPodcasts(prev => prev.filter(item => item.id !== pod.id))}
                                className="p-2 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-600 hover:text-white cursor-pointer flex-shrink-0"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ADMIN SLIPS VERIFICATION */}
                {activeTab === 'admin-payments' && (
                  <div className="space-y-6 w-full">
                    <div className={`border-b pb-4 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-300'}`}>
                      <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>බැංකු රිසිට්පත් Verification</h2>
                    </div>

                    <div className={`border rounded-3xl p-4 sm:p-6 overflow-x-auto shadow-xl w-full ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-300'
                    }`}>
                      <table className={`w-full text-left text-xs min-w-[600px] ${theme === 'dark' ? 'text-slate-300' : 'text-slate-800'}`}>
                        <thead className={`font-bold uppercase ${theme === 'dark' ? 'bg-slate-950 text-slate-400' : 'bg-slate-100 text-slate-700'}`}>
                          <tr>
                            <th className="p-4 rounded-l-xl">ශිෂ්‍යයා</th>
                            <th className="p-4">පන්තිය</th>
                            <th className="p-4">මුදල</th>
                            <th className="p-4">Slip</th>
                            <th className="p-4 rounded-r-xl text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className={`divide-y ${theme === 'dark' ? 'divide-slate-800' : 'divide-slate-300'}`}>
                          {pendingPayments.map(pay => (
                            <tr key={pay.id}>
                              <td className={`p-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{pay.studentName}</td>
                              <td className="p-4">{pay.courseTitle}</td>
                              <td className="p-4 font-black text-amber-500">Rs. {pay.amount}/=</td>
                              <td className="p-4">
                                <a href={pay.slipUrl} target="_blank" rel="noreferrer" className="text-amber-500 underline">බලන්න</a>
                              </td>
                              <td className="p-4 text-right">
                                {pay.status === 'Pending Verification' ? (
                                  <button
                                    type="button"
                                    onClick={() => handleApprovePayment(pay)}
                                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs cursor-pointer"
                                  >
                                    Approve & Unlock
                                  </button>
                                ) : (
                                  <span className="text-emerald-500 font-bold">Approved ✓</span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* ADMIN COURSE MANAGER */}
                {activeTab === 'admin-courses' && (
                  <div className="space-y-6 w-full">
                    <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4 ${
                      theme === 'dark' ? 'border-slate-800' : 'border-slate-300'
                    }`}>
                      <h2 className={`text-xl sm:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>පන්ති කළමනාකරණය සහ මාසික පාඩම් සංස්කරණය</h2>
                      <button
                        type="button"
                        onClick={() => {
                          setEditingCourseId(null);
                          setNewClassFormData({
                            batchYear: '2027 A/L',
                            category: 'Theory',
                            monthName: '2027 දෙසැම්බර් (December Class)',
                            courseTitle: '',
                            lessonTitle: '',
                            duration: '2 Hours 30 Mins',
                            feePerMonth: 2500,
                            videoPlatform: 'YouTube',
                            videoUrl: '',
                            hasPdf: false,
                            pdfFileName: '',
                            pdfFileUrl: '',
                            color1: '#0f172a',
                            color2: '#7c3aed',
                            summary: 'විෂය නිර්දේශයේ අදාළ පරිච්ඡේදයේ සියලුම අනුකොටස් සවිස්තරව.'
                          });
                          setShowAddClassModal(true);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        <span>+ නව පන්තියක් එකතු කරන්න</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                      {courses.map(course => (
                        <div 
                          key={course.id} 
                          style={{
                            background: `linear-gradient(135deg, ${course.color1} 0%, ${course.color2} 100%)`
                          }}
                          className="p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl text-white flex flex-col justify-between w-full"
                        >
                          <div className="space-y-3">
                            <div className="flex justify-between items-start gap-2">
                              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md">
                                {course.batchYear} • {course.category}
                              </span>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className="text-xs font-black text-amber-300">Rs. {course.feePerMonth}/=</span>
                                <button
                                  type="button"
                                  onClick={() => handleOpenEditClass(course)}
                                  className="p-1.5 rounded-lg bg-black/40 hover:bg-black/70 text-amber-300 transition-all cursor-pointer"
                                  title="Edit Class"
                                >
                                  <Edit3 className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteCourse(course.id)}
                                  className="p-1.5 rounded-lg bg-black/40 hover:bg-red-600 text-red-400 hover:text-white transition-all cursor-pointer"
                                  title="Delete Class"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            <h3 className="text-lg font-bold">{course.title}</h3>

                            <div className="space-y-3 pt-2">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-300">මාස සහ අන්තර්ගත පාඩම් (Monthly Modules & Lessons):</h4>
                              {course.monthlyModules.map(m => (
                                <div key={m.monthId} className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                                  <div className="flex justify-between items-center text-xs">
                                    <span className="font-bold text-amber-300">{m.monthName}</span>
                                    <span className="text-[10px] text-slate-300">{m.lessons.length} Lessons</span>
                                  </div>
                                  <div className="space-y-1.5 pt-1">
                                    {m.lessons.map(l => (
                                      <div key={l.id} className="p-2 rounded-xl bg-black/40 border border-white/5 flex justify-between items-center text-xs gap-2">
                                        <span className="text-slate-200 truncate">{l.title}</span>
                                        <div className="flex items-center gap-1.5 flex-shrink-0">
                                          <button
                                            type="button"
                                            onClick={() => handleOpenEditClass(course)}
                                            className="p-1 rounded bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-slate-300 cursor-pointer"
                                            title="Edit Lesson"
                                          >
                                            <Edit3 className="w-3 h-3" />
                                          </button>
                                          <button
                                            type="button"
                                            onClick={() => handleDeleteLesson(course.id, m.monthId, l.id)}
                                            className="p-1 rounded bg-white/10 hover:bg-red-600 text-slate-300 cursor-pointer"
                                            title="Delete Lesson"
                                          >
                                            <Trash2 className="w-3 h-3" />
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* LIVE ZOOM CLASS SCHEDULER MODAL (TEACHER / ADMIN) */}
                {isEditingZoom && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsEditingZoom(false);
                      }}
                      className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl"
                    >
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Tv className="w-5 h-5 text-indigo-400" />
                          <span>සජීවී Zoom පන්තිය සහ Countdown සකසන්න</span>
                        </h3>
                        <button type="button" onClick={() => setIsEditingZoom(false)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer">✕</button>
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">පන්තියේ මාතෘකාව (Live Class Title):</label>
                        <input
                          type="text"
                          required
                          value={liveZoomConfig.title}
                          onChange={e => setLiveZoomConfig({ ...liveZoomConfig, title: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">Zoom Meeting Link (Direct Join URL):</label>
                        <input
                          type="url"
                          required
                          value={liveZoomConfig.zoomUrl}
                          onChange={e => setLiveZoomConfig({ ...liveZoomConfig, zoomUrl: e.target.value })}
                          placeholder="https://zoom.us/j/..."
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">පන්තිය ආරම්භ වන දිනය සහ වේලාව (Date & Time):</label>
                        <input
                          type="datetime-local"
                          required
                          value={liveZoomConfig.targetDateTime}
                          onChange={e => setLiveZoomConfig({ ...liveZoomConfig, targetDateTime: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={liveZoomConfig.isActive}
                            onChange={e => setLiveZoomConfig({ ...liveZoomConfig, isActive: e.target.checked })}
                          />
                          <span>සිසුන්ගේ Dashboard එකේ Zoom Banner එක පෙන්වන්න</span>
                        </label>
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setIsEditingZoom(false)} className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 cursor-pointer">අවලංගු කරන්න</button>
                        <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-black cursor-pointer">Zoom Class සුරකින්න</button>
                      </div>
                    </form>
                  </div>
                )}

                {/* UNIFIED CLASS CREATOR & EDIT MODAL */}
                {showAddClassModal && (
                  <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
                    <form onSubmit={handleCreateUnifiedClass} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 space-y-5 shadow-2xl my-8">
                      <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-amber-400 flex-shrink-0" />
                            <span>{editingCourseId ? 'පන්තිය සහ පාඩම් සංස්කරණය (Edit Class)' : 'එකම තැනින් පන්තිය සහ රෙකෝඩින් එකතු කරන්න'}</span>
                          </h3>
                          <p className="text-xs text-slate-400">Class, Month, Recording & Custom Gradient Color controls.</p>
                        </div>
                        <button type="button" onClick={() => setShowAddClassModal(false)} className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white cursor-pointer">✕</button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">A/L Batch Year:</label>
                          <select
                            value={newClassFormData.batchYear}
                            onChange={e => setNewClassFormData({ ...newClassFormData, batchYear: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          >
                            <option value="2027 A/L">2027 A/L</option>
                            <option value="2028 A/L">2028 A/L</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">Class Category:</label>
                          <select
                            value={newClassFormData.category}
                            onChange={e => setNewClassFormData({ ...newClassFormData, category: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          >
                            <option value="Theory">Theory (සිද්ධාන්ත)</option>
                            <option value="Revision">Revision (පුනරීක්ෂණ)</option>
                            <option value="Paper Class">Paper Class (ප්‍රශ්න පත්‍ර)</option>
                          </select>
                        </div>
                      </div>

                      {/* Gradient Color Pickers for Course Card */}
                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <label className="block text-xs font-bold text-amber-400">පන්ති කාඩ්පත සඳහා Gradient වර්ණ:</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <span className="text-[11px] text-slate-400 block mb-1">Gradient Start Color (Color 1)</span>
                            <div className="flex items-center gap-3">
                              <input
                                type="color"
                                value={newClassFormData.color1}
                                onChange={e => setNewClassFormData({ ...newClassFormData, color1: e.target.value })}
                                className="w-10 h-10 rounded-xl bg-transparent cursor-pointer border-0"
                              />
                              <span className="text-xs font-mono text-slate-300">{newClassFormData.color1}</span>
                            </div>
                          </div>

                          <div>
                            <span className="text-[11px] text-slate-400 block mb-1">Gradient End Color (Color 2)</span>
                            <div className="flex items-center gap-3">
                              <input
                                type="color"
                                value={newClassFormData.color2}
                                onChange={e => setNewClassFormData({ ...newClassFormData, color2: e.target.value })}
                                className="w-10 h-10 rounded-xl bg-transparent cursor-pointer border-0"
                              />
                              <span className="text-xs font-mono text-slate-300">{newClassFormData.color2}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">මාසය (Month Name):</label>
                          <input
                            type="text"
                            required
                            placeholder="eg: 2027 දෙසැම්බර් (December Class)"
                            value={newClassFormData.monthName}
                            onChange={e => setNewClassFormData({ ...newClassFormData, monthName: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-400 mb-1">මාසික ගාස්තුව (Monthly Fee):</label>
                          <input
                            type="number"
                            required
                            value={newClassFormData.feePerMonth}
                            onChange={e => setNewClassFormData({ ...newClassFormData, feePerMonth: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">පාඩමේ මාතෘකාව (Lesson Topic):</label>
                        <input
                          type="text"
                          required
                          placeholder="eg: 01. අනුරාධපුර රාජධානියේ වාරි ශිෂ්ටාචාරය"
                          value={newClassFormData.lessonTitle}
                          onChange={e => setNewClassFormData({ ...newClassFormData, lessonTitle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                        <label className="block text-xs font-bold text-amber-400">Recording Platform & Video Link:</label>
                        <div className="flex gap-4 flex-wrap">
                          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                            <input
                              type="radio"
                              name="platform"
                              checked={newClassFormData.videoPlatform === 'YouTube'}
                              onChange={() => setNewClassFormData({ ...newClassFormData, videoPlatform: 'YouTube' })}
                            />
                            <span>YouTube Embed</span>
                          </label>
                          <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                            <input
                              type="radio"
                              name="platform"
                              checked={newClassFormData.videoPlatform === 'Zoom'}
                              onChange={() => setNewClassFormData({ ...newClassFormData, videoPlatform: 'Zoom' })}
                            />
                            <span>Zoom Recording URL</span>
                          </label>
                        </div>

                        <input
                          type="url"
                          required
                          placeholder={newClassFormData.videoPlatform === 'YouTube' ? 'https://www.youtube.com/watch?v=...' : 'https://zoom.us/rec/play/...'}
                          value={newClassFormData.videoUrl}
                          onChange={e => setNewClassFormData({ ...newClassFormData, videoUrl: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <div className="flex justify-between items-center">
                          <label className="text-xs font-bold text-amber-400">Tute PDF Upload (Optional):</label>
                          <span className="text-[10px] text-slate-500">PDF ONLY</span>
                        </div>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleAdminPdfUploadInClassCreator}
                          className="w-full text-xs p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                        />
                        {newClassFormData.hasPdf && (
                          <p className="text-[11px] text-emerald-400 font-bold">✓ Attached: {newClassFormData.pdfFileName}</p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setShowAddClassModal(false)} className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 text-xs text-slate-300 cursor-pointer">අවලංගු කරන්න</button>
                        <button type="submit" className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs shadow-lg cursor-pointer hover:opacity-90">
                          {editingCourseId ? 'වෙනස්කම් සුරකින්න (Save Changes)' : 'පන්තිය සක්‍රීය කරන්න'}
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                {/* HERO BANNER EDIT MODAL */}
                {isEditingBanner && (
                  <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <form onSubmit={handleSaveBanner} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
                      <h3 className="text-lg sm:text-xl font-bold text-white">ප්‍රවීන් සුරංජන Sir ගේ බැනරය වෙනස් කිරීම</h3>
                      
                      <div>
                        <label className="block text-xs text-slate-400 mb-1">පින්තූරය Upload (JPG/PNG):</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={e => {
                            const file = e.target.files[0];
                            if (file) {
                              setBannerFormData({ ...bannerFormData, photoUrl: URL.createObjectURL(file) });
                            }
                          }}
                          className="w-full text-xs p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 mb-2"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">ප්‍රධාන මාතෘකාව (Main Heading):</label>
                        <input
                          type="text"
                          required
                          value={bannerFormData.mainHeading}
                          onChange={e => setBannerFormData({ ...bannerFormData, mainHeading: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs text-slate-400 mb-1">විශේෂ පණිවුඩය (Sub Message):</label>
                        <textarea
                          rows={3}
                          required
                          value={bannerFormData.subMessage}
                          onChange={e => setBannerFormData({ ...bannerFormData, subMessage: e.target.value })}
                          className="w-full p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                        ></textarea>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-end gap-2 pt-2">
                        <button type="button" onClick={() => setIsEditingBanner(false)} className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300 cursor-pointer">අවලංගු කරන්න</button>
                        <button type="submit" className="w-full sm:w-auto px-5 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-black cursor-pointer">සුරකින්න</button>
                      </div>
                    </form>
                  </div>
                )}

              </div>
            )}

          </main>
        </>
      )}

      {/* ADMIN AUTH PIN MODAL */}
      {showAdminAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleAdminAuthSubmit} className="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl">
            <LockKeyhole className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-xl font-bold text-white">ඇඩ්මින් පිවිසුම</h3>
            <p className="text-xs text-slate-400">PIN අංකය ඇතුළත් කරන්න (Default PIN: 1234).</p>

            {authError && <p className="text-xs text-red-400">{authError}</p>}

            <input
              type="password"
              required
              maxLength={8}
              value={adminPinInput}
              onChange={e => setAdminPinInput(e.target.value)}
              placeholder="PIN 1234"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-center text-lg font-black text-white"
            />

            <div className="flex gap-2">
              <button type="button" onClick={() => setShowAdminAuthModal(false)} className="w-1/2 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs cursor-pointer">අවලංගු කරන්න</button>
              <button type="submit" className="w-1/2 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-black text-xs cursor-pointer">ඇතුළු වන්න</button>
            </div>
          </form>
        </div>
      )}

      {/* DEVELOPER TOOL AUTH PIN MODAL (PIN: 9999) */}
      {showDevAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleDevAuthSubmit} className="bg-slate-900 border border-indigo-500/50 rounded-3xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl">
            <Key className="w-8 h-8 text-indigo-400 mx-auto" />
            <h3 className="text-xl font-extrabold text-white">Developer Studio Access</h3>
            <p className="text-xs text-slate-400">Enter Developer Master PIN (Default PIN: 9999).</p>

            {devAuthError && <p className="text-xs text-red-400">{devAuthError}</p>}

            <input
              type="password"
              required
              maxLength={8}
              value={devPinInput}
              onChange={e => setDevPinInput(e.target.value)}
              placeholder="Dev PIN 9999"
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-indigo-900 text-center text-lg font-black text-white"
            />

            <div className="flex gap-2">
              <button type="button" onClick={() => setShowDevAuthModal(false)} className="w-1/2 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer">Cancel</button>
              <button type="submit" className="w-1/2 py-2.5 rounded-xl bg-indigo-600 text-white font-extrabold text-xs cursor-pointer">Unlock Dev Tool</button>
            </div>
          </form>
        </div>
      )}

      {/* CREATE NEW TEACHER PROFILE MODAL (DEVELOPER STUDIO) */}
      {showNewTeacherModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <form onSubmit={handleCreateTeacherProfile} className="bg-slate-900 border border-indigo-500/40 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-indigo-400" />
                <span>Create New Teacher LMS Profile</span>
              </h3>
              <button type="button" onClick={() => setShowNewTeacherModal(false)} className="p-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer">✕</button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Academy / LMS Brand Name:</label>
              <input
                type="text"
                required
                placeholder="eg: Nuwan Bandara Chemistry"
                value={newTeacherForm.appName}
                onChange={e => setNewTeacherForm({ ...newTeacherForm, appName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Teacher Name:</label>
              <input
                type="text"
                required
                placeholder="eg: Nuwan Bandara (නුවන් බණ්ඩාර)"
                value={newTeacherForm.teacherName}
                onChange={e => setNewTeacherForm({ ...newTeacherForm, teacherName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Subject Name:</label>
                <input
                  type="text"
                  required
                  placeholder="eg: A/L Chemistry"
                  value={newTeacherForm.subjectName}
                  onChange={e => setNewTeacherForm({ ...newTeacherForm, subjectName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Monthly Service Fee:</label>
                <input
                  type="text"
                  required
                  value={newTeacherForm.monthlyFeeDue}
                  onChange={e => setNewTeacherForm({ ...newTeacherForm, monthlyFeeDue: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Tagline:</label>
              <input
                type="text"
                required
                placeholder="eg: 2027 & 2028 A/L Chemistry Theory & Paper Class"
                value={newTeacherForm.tagline}
                onChange={e => setNewTeacherForm({ ...newTeacherForm, tagline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white"
              />
            </div>

            <div className="flex items-center gap-4 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Accent Color:</label>
                <input
                  type="color"
                  value={newTeacherForm.primaryColor}
                  onChange={e => setNewTeacherForm({ ...newTeacherForm, primaryColor: e.target.value })}
                  className="w-10 h-10 rounded-xl bg-transparent cursor-pointer border-0"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button type="button" onClick={() => setShowNewTeacherModal(false)} className="px-4 py-2.5 rounded-xl bg-slate-800 text-xs font-bold text-slate-300 cursor-pointer">Cancel</button>
              <button type="submit" className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Create Teacher Profile</button>
            </div>
          </form>
        </div>
      )}

      {/* IN-APP DELETE CONFIRMATION MODAL */}
      {confirmDeleteDialog && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-red-500/40 rounded-3xl max-w-sm w-full p-6 space-y-4 text-center shadow-2xl">
            <AlertCircle className="w-10 h-10 text-red-500 mx-auto" />
            <h3 className="text-lg font-bold text-white">තහවුරු කිරීම (Confirm Delete)</h3>
            <p className="text-xs text-slate-300">{confirmDeleteDialog.message}</p>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setConfirmDeleteDialog(null)}
                className="w-1/2 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
              >
                අවලංගු කරන්න
              </button>
              <button
                type="button"
                onClick={confirmDeleteDialog.onConfirm}
                className="w-1/2 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-black cursor-pointer"
              >
                ඉවත් කරන්න
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className={`mt-16 border-t py-8 text-center text-xs w-full ${
        theme === 'dark' ? 'border-slate-800 bg-slate-950/60 text-slate-500' : 'border-slate-300 bg-white text-slate-600'
      }`}>
        <p>{lmsBrandConfig.footerText}</p>
      </footer>

    </div>
  );
}