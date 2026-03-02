// 50张首页素材 - 艺术画作+文字（去掉照片，专注心态共鸣）
const artworks = [
    // ===== 艺术画作 (30张) - 孤独、独处、安静主题 =====
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1200px-Nighthawks_by_Edward_Hopper_1942.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Morning_Sun_by_Edward_Hopper.jpg/800px-Morning_Sun_by_Edward_Hopper.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Automat_by_Edward_Hopper.jpg/800px-Automat_by_Edward_Hopper.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Room_in_New_York_by_Edward_Hopper.jpg/800px-Room_in_New_York_by_Edward_Hopper.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Summer_Evening_by_Edward_Hopper.jpg/800px-Summer_Evening_by_Edward_Hopper.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Edward_Hopper_-_Office_in_a_Small_City_-_Google_Art_Project.jpg/1200px-Edward_Hopper_-_Office_in_a_Small_City_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Edward_Hopper_-_New_York_Movie_-_Google_Art_Project.jpg/1200px-Edward_Hopper_-_New_York_Movie_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Edward_Hopper_-_Gas_-_Google_Art_Project.jpg/1200px-Edward_Hopper_-_Gas_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edward_Hopper_-_Cape_Cod_Evening_-_Google_Art_Project.jpg/1200px-Edward_Hopper_-_Cape_Cod_Evening_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Edward_Hopper_-_People_in_the_Sun_-_Google_Art_Project.jpg/1200px-Edward_Hopper_-_People_in_the_Sun_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1200px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Munch_The_Scream.jpg/800px-Munch_The_Scream.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg" },
    { type: "painting", title: "", artist: "", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/The_Great_Wave_off_Kanagawa.jpg/1200px-The_Great_Wave_off_Kanagawa.jpg" },
    
    // ===== 文字截图 (20张) - 共鸣心态 =====
    { type: "text", title: "我想", artist: "一个人静静", text: "我想\n一个人\n静静" },
    { type: "text", title: "此刻", artist: "世界与我无关", text: "此刻\n世界与我\n无关" },
    { type: "text", title: "别吵", artist: "让我待会儿", text: "别吵\n让我\n待会儿" },
    { type: "text", title: "安静", artist: "是一种奢侈", text: "安静\n是一种\n奢侈" },
    { type: "text", title: "独处", artist: "不是孤独", text: "独处\n不是\n孤独" },
    { type: "text", title: "深夜", artist: "适合发呆", text: "深夜\n适合\n发呆" },
    { type: "text", title: "耳机", artist: "是我的保护罩", text: "耳机\n是我的\n保护罩" },
    { type: "text", title: "角落", artist: "最安全", text: "角落\n最\n安全" },
    { type: "text", title: "沉默", artist: "是最好的回答", text: "沉默\n是最好的\n回答" },
    { type: "text", title: "消失", artist: "一会儿就好", text: "消失\n一会儿\n就好" },
    { type: "text", title: "放空", artist: "什么都不想", text: "放空\n什么都不\n想" },
    { type: "text", title: "独处时光", artist: "最珍贵", text: "独处\n时光\n最珍贵" },
    { type: "text", title: "勿扰", artist: "正在充电", text: "勿扰\n正在\n充电" },
    { type: "text", title: "安静", artist: "是我的需求", text: "安静\n是我的\n需求" },
    { type: "text", title: "一个人", artist: "也很好", text: "一个人\n也很\n好" },
    { type: "text", title: "此刻", artist: "只属于我", text: "此刻\n只属于\n我" },
    { type: "text", title: "远离", artist: "喧嚣", text: "远离\n喧嚣" },
    { type: "text", title: "静静", artist: "就好", text: "静静\n就好" },
    { type: "text", title: "不必", artist: "解释", text: "不必\n解释" },
    { type: "text", title: "沉默", artist: "是金", text: "沉默\n是\n金" },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledArtworks = shuffleArray([...artworks]);
