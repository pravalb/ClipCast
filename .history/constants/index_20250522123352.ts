export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

const dummyCards=[
  {
      id : "1",
      username:'Jason',
      title : "SnapChat Message",
      thumbnail : "/assets/samples/thumbnail (1).png",
      createdAt : new Date("2025-05-01"),
      userImg : "/assets/images/jason.png",
      views : 10,
      visibility : "public",
      duration:156,
  },
  {
    id: "2",
    username: "Emily",
    title: "Morning Routine Vlog",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-04-20"),
    userImg: "/assets/images/emily.png",
    views: 254,
    visibility: "private",
    duration: 485,
  },
  {
    id: "3",
    username: "Mark",
    title: "React Native Crash Course",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-03-15"),
    userImg: "/assets/images/mark.png",
    views: 1023,
    visibility: "public",
    duration: 1320,
  },
  {
    id: "4",
    username: "Sophie",
    title: "Behind the Scenes: Travel Shoot",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-02-11"),
    userImg: "/assets/images/sophie.png",
    views: 78,
    visibility: "unlisted",
    duration: 605,
  },
  {
    id: "5",
    username: "David",
    title: "How to Budget in 2025",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-01-28"),
    userImg: "/assets/images/david.png",
    views: 340,
    visibility: "public",
    duration: 390,
  },
  {
    id: "6",
    username: "Olivia",
    title: "Top 5 AI Tools in Design",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-05-10"),
    userImg: "/assets/images/olivia.png",
    views: 2178,
    visibility: "public",
    duration: 745,
  },
  {
    id: "7",
    username: "Leo",
    title: "Speed Run: Mario Edition",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-04-02"),
    userImg: "/assets/images/leo.png",
    views: 493,
    visibility: "private",
    duration: 212,
  },
  {
    id: "8",
    username: "Isabella",
    title: "DIY Home Office Setup",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-03-23"),
    userImg: "/assets/images/isabella.png",
    views: 864,
    visibility: "unlisted",
    duration: 1103,
  },
]