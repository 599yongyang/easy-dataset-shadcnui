export const sites = [
    {
        name: 'HuggingFace开源数据集',
        link: 'https://huggingface.co/datasets',
        image: '/images/sites/huggingface.png',
        description: '提供了丰富的开源数据集，涵盖多种领域和语言，支持自然语言处理、计算机视觉等多种任务。',
        labels: ['热门推荐', '多模态']
    },
    {
        name: 'OpenDataLab开源数据集',
        link: 'https://opendatalab.com/',
        image: '/images/sites/opendatalab.png',
        description: '致力于收集和整理高质量的开源数据集，方便研究人员和开发者使用。',
        labels: ['热门推荐']
    },
    {
        name: '谷歌开源数据集',
        link: 'https://datasetsearch.research.google.com',
        image: '/images/sites/google.png',
        description: '谷歌提供的数据集搜索工具，可帮助用户找到来自不同来源的公开数据集。',
        labels: ['热门推荐', '英文资源']
    },
    {
        name: 'kaggle开源数据集',
        link: 'https://www.kaggle.com/datasets',
        image: '/images/sites/kaggle.png',
        description: 'Kaggle平台上的开源数据集，涉及各种领域和任务，常用于数据竞赛和实践。',
        labels: ['热门推荐', '英文资源']
    },
    {
        name: 'ModelScope开源数据集',
        link: 'https://modelscope.cn/datasets',
        image: '/images/sites/modelscope.png',
        description: '提供了多种开源数据集，支持模型的训练和评估，涵盖多个领域。',
        labels: ['中文资源']
    },
    {
        name: 'LUGE千言开源数据集',
        link: 'https://www.luge.ai/',
        image: '/images/sites/lluga.png',
        description: '专注于中文领域的开源数据集，包括自然语言处理、语音识别等方向。',
        labels: ['中文资源']
    },
    {
        name: 'GitHub开源数据集',
        link: 'https://github.com/awesomedata/awesome-public-datasets',
        image: '/images/sites/github.png',
        description: '在GitHub上整理的优秀的公开数据集资源，涉及多个领域和方向。',
        labels: ['热门推荐']
    },
    {
        name: 'AWS亚马逊开源数据集',
        link: 'https://registry.opendata.aws/',
        image: '/images/sites/aws.png',
        description: '提供了大量的公开数据集，涵盖多个领域，可在亚马逊云服务上直接访问和使用。',
        labels: ['英文资源']
    },
    {
        name: 'TIANCHI天池开源数据集',
        link: 'https://tianchi.aliyun.com/dataset/',
        description: '阿里云天池平台提供的开源数据集，涵盖多个领域的竞赛数据和公开数据。',
        image: '/images/sites/default-dataset.png',
        labels: ['中文资源']
    },
    {
        name: 'UCI开源数据集',
        link: 'https://archive.ics.uci.edu/datasets',
        description: '加州大学欧文分校提供的开源数据集，涵盖多个领域，常用于机器学习研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据', '英文资源']
    },
    {
        name: '计算机视觉开源数据集',
        link: 'https://visualdata.io/discovery',
        description: '专注于计算机视觉领域的开源数据集，支持相关模型的训练和评估。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'BAAI开源数据集',
        link: 'https://data.baai.ac.cn/data',
        description: '北京智源人工智能研究院提供的开源数据集，涵盖多个领域，支持大模型的训练。',
        image: '/images/sites/default-dataset.png',
        labels: ['中文资源', '研究数据']
    },
    {
        name: '百度飞桨开源数据集',
        link: 'https://aistudio.baidu.com/datasetoverview',
        description: '百度飞桨平台提供的开源数据集，支持深度学习模型的训练和评估。',
        image: '/images/sites/default-dataset.png',
        labels: ['中文资源']
    },
    {
        name: '启智开源数据集',
        link: 'https://openi.pcl.ac.cn/explore/datasets',
        description: '开源平台提供的多种开源数据集，涵盖多个领域，支持模型的训练和研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['中文资源']
    },
    {
        name: 'LAION-2B-en',
        link: 'https://laion.ai/',
        description: '包含25亿张图像和相应的文本描述，适用于多模态模型的训练。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Common Crawl',
        link: 'https://commoncrawl.org/',
        description: '提供了大量的网页爬取数据，可用于语言模型的训练。',
        image: '/images/sites/default-dataset.png',
        labels: ['英文资源', '研究数据']
    },
    {
        name: 'The Pile',
        link: 'https://github.com/EleutherAI/the-pile',
        image: '/images/sites/default-dataset.png',
        description: '由多个数据集组成的大型语言模型训练数据集，涵盖多种文本类型。',
        labels: ['研究数据', '英文资源']
    },
    {
        name: 'MuJoCo',
        link: 'https://mujoco.org/',
        description: '用于物理模拟的机器人交互数据集，适用于强化学习和机器人控制任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Robotics Datasets',
        link: 'https://roboticsdatasets.github.io/',
        description: '提供了多种机器人交互数据集，支持机器人学习和控制任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Atari Games',
        link: 'https://www.atari.com/games',
        description: '经典的Atari游戏数据集，用于强化学习算法的基准测试。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Web-crawled Interactions',
        link: 'https://commoncrawl.org/',
        description: '从网络平台上爬取的用户行为数据，适用于训练交互式代理。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据']
    },
    {
        name: 'AI2 ARC Dataset',
        link: 'https://allenai.org/data/arc',
        description: '用于评估AI常识推理和解决问题能力的多选题数据集。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据']
    },
    {
        name: 'Speech Commands Dataset',
        link: 'https://www.tensorflow.org/datasets/catalog/speech_commands',
        description: '包含数千个语音命令的音频数据集，适用于语音识别任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Environmental Audio Datasets',
        link: 'https://www.tensorflow.org/datasets/catalog/audioset',
        description: '包含环境声音事件的音频数据集，适用于音频场景分类任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'COVID-19 Open Research Dataset',
        link: 'https://www.kaggle.com/allenai/cord-19-research-challenge',
        description: '包含45,000篇关于COVID-19的学术文章，适用于医疗AI研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据']
    },
    {
        name: 'Waymo Open Dataset',
        link: 'https://waymo.com/open/',
        description: '由Waymo发布的最多样化的自动驾驶数据集。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Labelme',
        link: 'http://labelme.csail.mit.edu/Release3.0/',
        description: '包含大量标注图像的数据集，适用于计算机视觉任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Stanford Dogs Dataset',
        link: 'http://vision.stanford.edu/aditya86/ImageNetDogs/',
        description: '包含20,500多张不同狗品种的图像数据集。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Flickr Audio Caption Corpus',
        link: 'https://www.multispeech.org/2018/challenge.html',
        description: '包含超过40,000个口语描述的音频数据集。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Data.gov',
        link: 'https://www.data.gov/',
        description: '美国政府开放数据平台，涵盖农业、气候、教育、能源等领域的公开数据集。',
        image: '/images/sites/default-dataset.png',
        labels: ['政府数据', '英文资源']
    },
    {
        name: 'Eurostat',
        link: 'https://ec.europa.eu/eurostat',
        description: '欧盟统计局提供的经济、人口、社会等多领域统计数据。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据', '英文资源']
    },
    {
        name: 'ImageNet',
        link: 'https://www.image-net.org/',
        description: '大型图像数据集，包含数百万张标注图像，广泛用于计算机视觉任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态', '计算机视觉']
    },
    {
        name: 'COCO Dataset',
        link: 'https://cocodataset.org/',
        description: '通用物体识别与分割数据集，适用于目标检测和图像分割任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'World Bank Open Data',
        link: 'https://data.worldbank.org/',
        description: '世界银行提供的全球经济指标、发展数据及统计报告。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据', '英文资源']
    },
    {
        name: 'NASA Earth Data',
        link: 'https://earthdata.nasa.gov/',
        description: 'NASA地球科学数据，涵盖气候、地质、环境等领域的遥感数据。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据', '地球科学']
    },
    {
        name: 'Yelp Open Dataset',
        link: 'https://www.yelp.com/dataset',
        description: '包含商家信息、用户评论和图片数据，适用于商业分析和NLP任务。',
        image: '/images/sites/default-dataset.png',
        labels: ['商业', '英文资源']
    },
    {
        name: 'CIFAR-10/100',
        link: 'https://www.cs.toronto.edu/~kriz/cifar.html',
        description: '经典的小规模图像分类数据集，包含10或100个类别的标注图像。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'Global Health Observatory (WHO)',
        link: 'https://www.who.int/data/gho',
        description: '世界卫生组织提供的全球公共卫生统计数据，包括疾病、营养等主题。',
        image: '/images/sites/default-dataset.png',
        labels: ['医疗健康', '研究数据']
    },
    {
        name: 'arXiv Dataset',
        link: 'https://www.kaggle.com/Cornell-University/arxiv',
        description: '包含数百万篇arXiv学术论文的元数据和全文，适用于文本挖掘研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['研究数据', '英文资源']
    },
    {
        name: 'LibriSpeech',
        link: 'https://www.openslr.org/12',
        description: '包含1000小时英语语音数据，适用于语音识别模型训练。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态', '语音识别']
    },
    {
        name: 'KITTI Vision Benchmark',
        link: 'http://www.cvlibs.net/datasets/kitti/',
        description: '自动驾驶领域经典数据集，包含立体视觉、激光雷达等多模态数据。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态', '自动驾驶']
    },
    {
        name: 'Cityscapes Dataset',
        link: 'https://www.cityscapes-dataset.com/',
        description: '城市街景语义分割数据集，支持自动驾驶和计算机视觉研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['多模态']
    },
    {
        name: 'CDC Data',
        link: 'https://data.cdc.gov/',
        description: '美国疾病控制与预防中心发布的公共卫生数据集，涵盖疾病追踪和健康统计。',
        image: '/images/sites/default-dataset.png',
        labels: ['医疗健康', '政府数据']
    },
    {
        name: 'OpenStreetMap',
        link: 'https://www.openstreetmap.org/',
        description: '开源地理数据协作项目，提供全球范围的道路、建筑等地理信息数据。',
        image: '/images/sites/default-dataset.png',
        labels: ['地理信息', '众包数据']
    },
    {
        name: 'FiveThirtyEight Datasets',
        link: 'https://data.fivethirtyeight.com/',
        description: '涵盖政治、体育、文化等领域的数据集，常用于数据新闻分析。',
        image: '/images/sites/default-dataset.png',
        labels: ['社会趋势', '英文资源']
    },
    {
        name: 'Human Protein Atlas',
        link: 'https://www.proteinatlas.org/',
        description: '包含人体蛋白质分布的组织图像数据，支持生物医学研究。',
        image: '/images/sites/default-dataset.png',
        labels: ['医疗健康', '研究数据']
    }
];
