// ===== 选择题题库 =====
// 编辑本文件即可增删题目，系统会自动加载
(function() {
  const questions = [
    // ── 基础概念类 ──
    { id: "mc-001", question: "二分搜索算法是利用（ ）实现的算法。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-002", question: "下列不是动态规划算法基本步骤的是（ ）。", options: ["找出最优解的性质", "构造最优解", "算出最优解", "定义最优解"], answer: "A" },
    { id: "mc-003", question: "最大效益优先是（ ）的一种搜索方式。", options: ["分支界限法", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-004", question: "最长公共子序列算法利用的算法是（ ）。", options: ["分支界限法", "动态规划法", "贪心法", "回溯法"], answer: "B" },
    { id: "mc-005", question: "回溯法解TSP问题时的解空间树是（ ）。", options: ["子集树", "排列树", "深度优先生成树", "广度优先生成树"], answer: "B" },
    { id: "mc-006", question: "下列算法中通常以自底向上的方式求解最优解的是（ ）。", options: ["备忘录法", "动态规划法", "贪心法", "回溯法"], answer: "B" },
    { id: "mc-007", question: "衡量一个算法好坏的标准是（ ）。", options: ["运行速度快", "占用空间少", "时间复杂度低", "代码短"], answer: "C" },
    { id: "mc-008", question: "以下不可以使用分治法求解的是（ ）。", options: ["棋盘覆盖问题", "选择问题", "归并排序", "0/1背包问题"], answer: "D" },
    { id: "mc-009", question: "实现循环赛日程表利用的算法是（ ）。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-010", question: "下面不是分支界限法搜索方式的是（ ）。", options: ["广度优先", "最小耗费优先", "最大效益优先", "深度优先"], answer: "D" },
    { id: "mc-011", question: "下列算法中通常以深度优先方式系统搜索问题解的是（ ）。", options: ["备忘录法", "动态规划法", "贪心法", "回溯法"], answer: "D" },
    { id: "mc-012", question: "一个问题可用动态规划算法或贪心算法求解的关键特征是问题的（ ）。", options: ["重叠子问题", "最优子结构性质", "贪心选择性质", "定义最优解"], answer: "B" },
    { id: "mc-013", question: "广度优先是（ ）的一种搜索方式。", options: ["分支界限法", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-014", question: "背包问题的贪心算法所需的计算时间为（ ）。", options: ["O(n2^n)", "O(nlogn)", "O(2^n)", "O(n)"], answer: "B" },
    { id: "mc-015", question: "实现最大子段和利用的算法是（ ）。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "B" },
    { id: "mc-016", question: "实现棋盘覆盖算法利用的算法是（ ）。", options: ["分治法", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-017", question: "下面是贪心算法的基本要素的是（ ）。", options: ["重叠子问题", "构造最优解", "贪心选择性质", "定义最优解"], answer: "C" },
    { id: "mc-018", question: "回溯法的效率不依赖于下列哪些因素（ ）。", options: ["满足显约束的值的个数", "计算约束函数的时间", "计算限界函数的时间", "确定解空间的时间"], answer: "D" },
    { id: "mc-019", question: "下面哪种函数是回溯法中为避免无效搜索采取的策略（ ）。", options: ["递归函数", "剪枝函数", "随机数函数", "搜索函数"], answer: "B" },
    { id: "mc-020", question: "以深度优先方式系统搜索问题解的算法称为（ ）。", options: ["分支界限算法", "概率算法", "贪心算法", "回溯算法"], answer: "D" },
    { id: "mc-021", question: "贪心算法与动态规划算法的主要区别是（ ）。", options: ["最优子结构", "贪心选择性质", "构造最优解", "定义最优解"], answer: "B" },
    { id: "mc-022", question: "采用最大效益优先搜索方式的算法是（ ）。", options: ["分支界限法", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-023", question: "（ ）是贪心算法与动态规划算法的共同点。", options: ["重叠子问题", "构造最优解", "贪心选择性质", "最优子结构性质"], answer: "D" },
    { id: "mc-024", question: "矩阵连乘问题的算法可由（ ）设计实现。", options: ["分支界限算法", "动态规划算法", "贪心算法", "回溯算法"], answer: "B" },
    { id: "mc-025", question: "0-1背包问题的回溯算法所需的计算时间为（ ）。", options: ["O(n2^n)", "O(nlogn)", "O(2^n)", "O(n)"], answer: "C" },
    { id: "mc-026", question: "使用分治法求解不需要满足的条件是（ ）。", options: ["子问题必须是一样的", "子问题不能够重复", "子问题的解可以合并", "原问题和子问题使用相同的方法解"], answer: "A" },
    { id: "mc-027", question: "下面问题（ ）不能使用贪心法解决。", options: ["单源最短路径问题", "N皇后问题", "最小花费生成树问题", "背包问题"], answer: "B" },
    { id: "mc-028", question: "下列算法中不能解决0/1背包问题的是（ ）。", options: ["贪心法", "动态规划", "回溯法", "分支限界法"], answer: "A" },
    { id: "mc-029", question: "回溯法搜索状态空间树是按照（ ）的顺序。", options: ["中序遍历", "广度优先遍历", "深度优先遍历", "层次优先遍历"], answer: "C" },
    { id: "mc-030", question: "采用广度优先策略搜索的算法是（ ）。", options: ["分支界限法", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-031", question: "实现合并排序利用的算法是（ ）。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-032", question: "下列是动态规划算法基本要素的是（ ）。", options: ["定义最优解", "构造最优解", "算出最优解", "子问题重叠性质"], answer: "D" },
    { id: "mc-033", question: "下列算法中通常以自底向下的方式求解最优解的是（ ）。", options: ["分治法", "动态规划法", "贪心法", "回溯法"], answer: "B" },

    // ── 概率算法类 ──
    { id: "mc-034", question: "在下列算法中有时找不到问题解的是（ ）。", options: ["蒙特卡罗算法", "拉斯维加斯算法", "舍伍德算法", "数值概率算法"], answer: "B" },
    { id: "mc-035", question: "下列随机算法中运行时有时候成功有时候失败的是（ ）", options: ["数值概率算法", "舍伍德算法", "拉斯维加斯算法", "蒙特卡罗算法"], answer: "C" },
    { id: "mc-036", question: "下列哪一种算法是随机化算法（ ）", options: ["贪心算法", "回溯法", "动态规划算法", "舍伍德算法"], answer: "D" },
    { id: "mc-037", question: "蒙特卡罗算法是（ ）的一种。", options: ["分支界限算法", "概率算法", "贪心算法", "回溯算法"], answer: "B" },
    { id: "mc-038", question: "下列哪一种算法不是随机化算法（ ）", options: ["蒙特卡罗算法", "拉斯维加斯算法", "动态规划算法", "舍伍德算法"], answer: "C" },

    // ── 复杂度分析类 ──
    { id: "mc-039", question: "设f(N),g(N)是定义在正数集上的正函数,如果存在正的常数C和自然数N0,使得当N≥N0时有f(N)≤Cg(N),则称函数f(N)当N充分大时有上界g(N),记作f(N)=O(g(N)),即f(N)的阶( )g(N)的阶。", options: ["不高于", "不低于", "等价于", "逼近"], answer: "A" },
    { id: "mc-040", question: "算法是由若干条指令组成的有穷序列，而且满足以下性质（ ）（1）输入：有0个或多个输入（2）输出：至少有一个输出（3）确定性：指令清晰，无歧义（4）有限性：指令执行次数有限，而且执行时间有限", options: ["(1)(2)(3)", "(1)(2)(4)", "(1)(3)(4)", "(1)(2)(3)(4)"], answer: "D" },
    { id: "mc-041", question: "函数32n+10nlogn的渐进表达式是( )", options: ["2n", "32n", "nlogn", "10nlogn"], answer: "B" },
    { id: "mc-042", question: "下面关于NP问题说法正确的是（ ）", options: ["NP问题都是不可能解决的问题", "P类问题包含在NP类问题中", "NP完全问题是P类问题的子集", "NP类问题包含在P类问题中"], answer: "B" },
    { id: "mc-043", question: "时间复杂度O(n^2)表示的是（ ）", options: ["常数时间", "线性时间", "平方时间", "指数时间"], answer: "C" },
    { id: "mc-044", question: "快速排序的平均时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n^2)", "O(logn)"], answer: "B" },
    { id: "mc-045", question: "冒泡排序的最坏时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n^2)", "O(logn)"], answer: "C" },
    { id: "mc-046", question: "二分查找的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n^2)", "O(logn)"], answer: "D" },
    { id: "mc-047", question: "下列时间复杂度中，效率最高的是（ ）", options: ["O(n)", "O(nlogn)", "O(logn)", "O(n^2)"], answer: "C" },
    { id: "mc-048", question: "斐波那契数列递归实现的时间复杂度是（ ）", options: ["O(n)", "O(2^n)", "O(nlogn)", "O(n^2)"], answer: "B" },

    // ── 回溯与分支限界类 ──
    { id: "mc-049", question: "回溯法解旅行售货员问题时的解空间树是（ ）。", options: ["子集树", "排列树", "深度优先生成树", "广度优先生成树"], answer: "B" },
    { id: "mc-050", question: "回溯法在解空间树T上的搜索方式是( )。", options: ["深度优先", "广度优先", "最小耗费优先", "活结点优先"], answer: "A" },
    { id: "mc-051", question: "回溯算法和分支限界法的问题的解空间树不会是( )。", options: ["有序树", "子集树", "排列树", "无序树"], answer: "D" },
    { id: "mc-052", question: "备忘录方法是哪种算法的变形。（ ）", options: ["分治法", "动态规划法", "贪心法", "回溯法"], answer: "B" },
    { id: "mc-053", question: "用动态规划算法解决最大字段和问题，其时间复杂性为( )。", options: ["logn", "n", "n^2", "nlogn"], answer: "B" },
    { id: "mc-054", question: "实现大整数的乘法是利用的算法（ ）。", options: ["贪心法", "动态规划法", "分治策略", "回溯法"], answer: "C" },
    { id: "mc-055", question: "Strassen矩阵乘法是利用（ ）实现的算法。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-056", question: "合并排序算法是利用（ ）实现的算法。", options: ["分治策略", "动态规划法", "贪心法", "回溯法"], answer: "A" },
    { id: "mc-057", question: "解决活动安排问题，最好用（ ）算法", options: ["分治", "贪心", "动态规划", "穷举"], answer: "B" },
    { id: "mc-058", question: "采用贪心算法的最优装载问题的主要计算量在于将集装箱依其重量从小到大排序，故算法的时间复杂度为 ( ) 。", options: ["O(n*2^n)", "O(nlogn)", "O(2^n)", "O(n)"], answer: "B" },
    { id: "mc-059", question: "哈弗曼编码的贪心算法所需的计算时间为（ ）。", options: ["O(n*2^n)", "O(nlogn)", "O(2^n)", "O(n)"], answer: "B" },
    { id: "mc-060", question: "优先队列式分支限界法选取扩展结点的原则是（ ）。", options: ["先进先出", "后进先出", "结点的优先级", "随机"], answer: "C" },
    { id: "mc-061", question: "分支限界法解旅行售货员问题时，活结点表的组织形式是（ ）。", options: ["最小堆", "最大堆", "栈", "数组"], answer: "A" },
    { id: "mc-062", question: "分支限界法解最大团问题时，活结点表的组织形式是（ ）。", options: ["最小堆", "最大堆", "栈", "数组"], answer: "B" },
    { id: "mc-063", question: "从活结点表中选择下一个扩展结点的不同方式将导致不同的分支限界法,以下除( )之外都是最常见的方式。", options: ["队列式分支限界法", "优先队列式分支限界法", "栈式分支限界法", "FIFO分支限界法"], answer: "C" },
    { id: "mc-064", question: "在对问题的解空间树进行搜索的方法中,一个活结点最多有一次机会成为活结点的是( )。", options: ["回溯法", "分支限界法", "回溯法和分支限界法", "回溯法求解子集树问题"], answer: "B" },

    // ── 动态规划专项 ──
    { id: "mc-065", question: "动态规划算法的时间复杂度通常取决于（ ）", options: ["问题规模", "状态数目", "转移方程复杂度", "以上都是"], answer: "D" },
    { id: "mc-066", question: "动态规划中，状态转移方程的作用是（ ）", options: ["定义问题", "计算最优解", "描述状态之间的关系", "存储结果"], answer: "C" },
    { id: "mc-067", question: "以下哪个问题适合用动态规划解决（ ）", options: ["快速排序", "二分查找", "最长递增子序列", "选择排序"], answer: "C" },
    { id: "mc-068", question: "动态规划的核心思想是（ ）", options: ["分而治之", "贪心选择", "记忆化搜索", "随机化"], answer: "C" },
    { id: "mc-069", question: "下列关于动态规划的描述，错误的是（ ）", options: ["适用于具有最优子结构的问题", "适用于具有重叠子问题的问题", "时间复杂度一定优于贪心算法", "可以用自底向上或自顶向下方式实现"], answer: "C" },
    { id: "mc-070", question: "最长公共子序列问题中，若两个序列长度分别为m和n，则动态规划的时间复杂度是（ ）", options: ["O(m)", "O(n)", "O(mn)", "O(m+n)"], answer: "C" },

    // ── 贪心算法专项 ──
    { id: "mc-071", question: "贪心算法的基本要素是（ ）", options: ["最优子结构和贪心选择性质", "重叠子问题", "递归结构", "动态规划表"], answer: "A" },
    { id: "mc-072", question: "Dijkstra算法使用的是（ ）策略", options: ["分治", "贪心", "动态规划", "回溯"], answer: "B" },
    { id: "mc-073", question: "Prim算法用于求解（ ）", options: ["最短路径", "最小生成树", "拓扑排序", "强连通分量"], answer: "B" },
    { id: "mc-074", question: "Kruskal算法用于求解（ ）", options: ["最短路径", "最小生成树", "拓扑排序", "强连通分量"], answer: "B" },
    { id: "mc-075", question: "以下哪个问题不能用贪心算法得到最优解（ ）", options: ["活动安排", "最优装载", "0/1背包", "Huffman编码"], answer: "C" },

    // ── 图算法类 ──
    { id: "mc-076", question: "Dijkstra算法适用于（ ）", options: ["无向图", "有向图", "带权图（非负权）", "所有图"], answer: "C" },
    { id: "mc-077", question: "Bellman-Ford算法可以处理（ ）", options: ["负权边", "负权环", "无向图", "所有选项都正确"], answer: "D" },
    { id: "mc-078", question: "Floyd-Warshall算法的时间复杂度是（ ）", options: ["O(n)", "O(n^2)", "O(n^3)", "O(nlogn)"], answer: "C" },
    { id: "mc-079", question: "拓扑排序适用于（ ）", options: ["无向图", "有向无环图", "有环图", "完全图"], answer: "B" },
    { id: "mc-080", question: "最小生成树的边数是（ ）", options: ["n", "n-1", "n+1", "2n"], answer: "B" },

    // ── NP问题类 ──
    { id: "mc-081", question: "P类问题是指（ ）", options: ["多项式时间可解", "多项式时间可验证", "指数时间可解", "不可解"], answer: "A" },
    { id: "mc-082", question: "NP类问题是指（ ）", options: ["多项式时间可解", "多项式时间可验证", "指数时间可解", "不可解"], answer: "B" },
    { id: "mc-083", question: "NP完全问题的特点是（ ）", options: ["所有NP问题可归约到它", "多项式时间可解", "比P类问题简单", "以上都不对"], answer: "A" },
    { id: "mc-084", question: "以下哪个问题是NP完全问题（ ）", options: ["排序", "二分查找", "旅行售货员问题", "最小生成树"], answer: "C" },
    { id: "mc-085", question: "P和NP的关系是（ ）", options: ["P包含NP", "NP包含P", "P等于NP", "目前未知"], answer: "B" },

    // ── 排序算法类 ──
    { id: "mc-086", question: "以下哪个排序算法是稳定的（ ）", options: ["快速排序", "堆排序", "归并排序", "选择排序"], answer: "C" },
    { id: "mc-087", question: "堆排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n^2)", "O(logn)"], answer: "B" },
    { id: "mc-088", question: "归并排序需要的额外空间是（ ）", options: ["O(1)", "O(logn)", "O(n)", "O(nlogn)"], answer: "C" },
    { id: "mc-089", question: "快速排序的最坏时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n^2)", "O(logn)"], answer: "C" },
    { id: "mc-090", question: "以下哪个排序算法是原地排序（ ）", options: ["归并排序", "快速排序", "计数排序", "基数排序"], answer: "B" },

    // ── 高级算法类 ──
    { id: "mc-091", question: "舍伍德算法的特点是（ ）", options: ["总是正确，运行时间随机", "可能错误", "可能失败", "以上都不对"], answer: "A" },
    { id: "mc-092", question: "蒙特卡罗算法的特点是（ ）", options: ["总是正确，运行时间随机", "总是给出答案，可能错误", "可能失败", "以上都不对"], answer: "B" },
    { id: "mc-093", question: "拉斯维加斯算法的特点是（ ）", options: ["总是正确，运行时间随机", "总是给出答案，可能错误", "要么正确要么失败", "以上都不对"], answer: "C" },
    { id: "mc-094", question: "随机快速排序使用的是（ ）", options: ["舍伍德算法", "蒙特卡罗算法", "拉斯维加斯算法", "数值概率算法"], answer: "A" },
    { id: "mc-095", question: "Miller-Rabin素数测试使用的是（ ）", options: ["舍伍德算法", "蒙特卡罗算法", "拉斯维加斯算法", "数值概率算法"], answer: "B" },

    // ── 综合应用类 ──
    { id: "mc-096", question: "求解单源最短路径，当图中存在负权边但无负权环时，应使用（ ）", options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim"], answer: "B" },
    { id: "mc-097", question: "求解所有点对最短路径，应使用（ ）", options: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Kruskal"], answer: "C" },
    { id: "mc-098", question: "当物品可以分割时，背包问题应使用（ ）", options: ["贪心算法", "动态规划", "回溯法", "分支限界法"], answer: "A" },
    { id: "mc-099", question: "当物品不可分割时，0/1背包问题应使用（ ）", options: ["贪心算法", "动态规划", "分治法", "随机算法"], answer: "B" },
    { id: "mc-100", question: "算法设计中，问题的最优子结构性质是（ ）的关键", options: ["贪心算法和动态规划", "分治法", "回溯法", "概率算法"], answer: "A" },

    // ── 基础必会知识补充 ──
    { id: "mc-101", question: "算法的五个重要特性是（ ）", options: ["输入、输出、确定性、有限性、可行性", "输入、输出、正确性、效率、可读性", "时间、空间、正确性、可读性、可维护性", "以上都不对"], answer: "A" },
    { id: "mc-102", question: "算法的时间复杂度分析主要关注（ ）", options: ["最好情况", "最坏情况", "平均情况", "所有情况"], answer: "B" },
    { id: "mc-103", question: "递归算法的空间复杂度主要取决于（ ）", options: ["递归深度", "问题规模", "输入大小", "输出大小"], answer: "A" },
    { id: "mc-104", question: "分治法的三个步骤是（ ）", options: ["分解、解决、合并", "分析、设计、实现", "递归、迭代、回溯", "以上都不对"], answer: "A" },
    { id: "mc-105", question: "动态规划中，自底向上方法的特点是（ ）", options: ["从最小子问题开始", "从最大问题开始", "递归求解", "需要更多空间"], answer: "A" },
    { id: "mc-106", question: "贪心算法的核心是（ ）", options: ["每步选择当前最优", "考虑全局最优", "回溯调整", "动态规划"], answer: "A" },
    { id: "mc-107", question: "回溯法的解空间树通常有（ ）类型", options: ["子集树和排列树", "二叉树和三叉树", "有序树和无序树", "以上都不对"], answer: "A" },
    { id: "mc-108", question: "分支限界法中，剪枝的目的是（ ）", options: ["减少搜索空间", "增加搜索空间", "加快搜索速度", "A和C"], answer: "D" },
    { id: "mc-109", question: "概率算法的优点是（ ）", options: ["平均时间复杂度低", "总是正确", "实现简单", "不需要分析"], answer: "A" },
    { id: "mc-110", question: "算法分析的目的是（ ）", options: ["评估算法效率", "编写代码", "测试程序", "调试错误"], answer: "A" },

    // ── 常考重点题目 ──
    // 动态规划常考题
    { id: "mc-111", question: "动态规划算法中，状态转移方程的作用是（ ）", options: ["定义问题", "描述状态之间的关系", "存储结果", "输出答案"], answer: "B" },
    { id: "mc-112", question: "动态规划的最优子结构性质是指（ ）", options: ["子问题独立", "最优解包含子问题最优解", "子问题重叠", "贪心选择"], answer: "B" },
    { id: "mc-113", question: "最长公共子序列（LCS）问题的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(mn)", "O(n²)"], answer: "C" },
    { id: "mc-114", question: "0/1背包问题的动态规划时间复杂度是（ ）", options: ["O(n)", "O(nC)", "O(n²)", "O(2^n)"], answer: "B" },
    { id: "mc-115", question: "矩阵连乘问题的动态规划时间复杂度是（ ）", options: ["O(n)", "O(n²)", "O(n³)", "O(n^4)"], answer: "C" },
    { id: "mc-116", question: "最大子段和问题的Kadane算法时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(2^n)"], answer: "A" },
    { id: "mc-117", question: "动态规划中，状态的定义应该（ ）", options: ["尽可能复杂", "尽可能简洁", "包含所有信息", "随意定义"], answer: "B" },
    { id: "mc-118", question: "以下哪个问题适合用动态规划解决（ ）", options: ["快速排序", "二分查找", "最长递增子序列", "选择排序"], answer: "C" },
    { id: "mc-119", question: "动态规划的重叠子问题性质是指（ ）", options: ["子问题独立", "不同问题共享子问题", "子问题无序", "子问题唯一"], answer: "B" },
    { id: "mc-120", question: "动态规划的两种实现方式是（ ）", options: ["递归和迭代", "自底向上和自顶向下", "深度优先和广度优先", "贪心和回溯"], answer: "B" },

    // 贪心算法常考题
    { id: "mc-121", question: "贪心算法适用的关键条件是（ ）", options: ["最优子结构", "贪心选择性质", "重叠子问题", "A和B"], answer: "D" },
    { id: "mc-122", question: "活动安排问题的贪心策略是（ ）", options: ["选开始最早的", "选结束最早的", "选持续时间最短的", "选开始最晚的"], answer: "B" },
    { id: "mc-123", question: "Dijkstra算法使用的贪心策略是（ ）", options: ["选距离最远的", "选距离最近的", "选边数最多的", "选边数最少的"], answer: "B" },
    { id: "mc-124", question: "Prim算法用于求解（ ）", options: ["最短路径", "最小生成树", "拓扑排序", "强连通分量"], answer: "B" },
    { id: "mc-125", question: "Kruskal算法用于求解（ ）", options: ["最短路径", "最小生成树", "拓扑排序", "强连通分量"], answer: "B" },
    { id: "mc-126", question: "Huffman编码的贪心策略是（ ）", options: ["选频率最高的", "选频率最低的", "选长度最长的", "选长度最短的"], answer: "B" },
    { id: "mc-127", question: "以下哪个问题不能用贪心算法得到最优解（ ）", options: ["活动安排", "最优装载", "0/1背包", "Huffman编码"], answer: "C" },
    { id: "mc-128", question: "贪心算法与动态规划的主要区别是（ ）", options: ["时间复杂度", "是否回溯", "空间复杂度", "问题规模"], answer: "B" },
    { id: "mc-129", question: "贪心算法的特点是（ ）", options: ["步步最优", "全局最优", "回溯调整", "记忆化"], answer: "A" },
    { id: "mc-130", question: "最优装载问题的贪心策略是（ ）", options: ["选价值最高的", "选重量最轻的", "选价值密度最高的", "选体积最小的"], answer: "B" },

    // 分治法常考题
    { id: "mc-131", question: "分治法的适用条件是（ ）", options: ["子问题独立可合并", "子问题重叠", "贪心选择", "最优子结构"], answer: "A" },
    { id: "mc-132", question: "归并排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(2^n)"], answer: "B" },
    { id: "mc-133", question: "快速排序的平均时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(2^n)"], answer: "B" },
    { id: "mc-134", question: "二分查找的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "D" },
    { id: "mc-135", question: "Strassen矩阵乘法的时间复杂度是（ ）", options: ["O(n²)", "O(n^2.807)", "O(n³)", "O(n^4)"], answer: "B" },
    { id: "mc-136", question: "分治法的三个步骤是（ ）", options: ["分解、解决、合并", "分析、设计、实现", "递归、迭代、回溯", "以上都不对"], answer: "A" },
    { id: "mc-137", question: "归并排序需要的额外空间是（ ）", options: ["O(1)", "O(logn)", "O(n)", "O(nlogn)"], answer: "C" },
    { id: "mc-138", question: "快速排序的最坏时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(2^n)"], answer: "C" },
    { id: "mc-139", question: "分治法与动态规划的区别是（ ）", options: ["子问题是否独立", "时间复杂度", "空间复杂度", "实现方式"], answer: "A" },
    { id: "mc-140", question: "棋盘覆盖问题的时间复杂度是（ ）", options: ["O(n)", "O(n²)", "O(n³)", "O(4^n)"], answer: "B" },

    // 回溯与分支限界常考题
    { id: "mc-141", question: "回溯法的搜索方式是（ ）", options: ["广度优先", "深度优先", "最小耗费优先", "最大效益优先"], answer: "B" },
    { id: "mc-142", question: "分支限界法的搜索方式可以是（ ）", options: ["广度优先", "最小耗费优先", "最大效益优先", "以上都对"], answer: "D" },
    { id: "mc-143", question: "N皇后问题使用的解空间树是（ ）", options: ["子集树", "排列树", "二叉树", "三叉树"], answer: "B" },
    { id: "mc-144", question: "0/1背包问题使用的解空间树是（ ）", options: ["子集树", "排列树", "二叉树", "三叉树"], answer: "A" },
    { id: "mc-145", question: "回溯法的剪枝函数包括（ ）", options: ["约束函数", "限界函数", "A和B", "目标函数"], answer: "C" },
    { id: "mc-146", question: "分支限界法解TSP问题使用的活结点表是（ ）", options: ["队列", "最小堆", "最大堆", "栈"], answer: "B" },
    { id: "mc-147", question: "分支限界法解背包问题使用的活结点表是（ ）", options: ["队列", "最小堆", "最大堆", "栈"], answer: "C" },
    { id: "mc-148", question: "回溯法与分支限界法的区别是（ ）", options: ["搜索方式", "求解目标", "剪枝策略", "以上都对"], answer: "D" },
    { id: "mc-149", question: "回溯法通常用于求解（ ）", options: ["最优解", "所有解", "近似解", "随机解"], answer: "B" },
    { id: "mc-150", question: "分支限界法通常用于求解（ ）", options: ["最优解", "所有解", "近似解", "随机解"], answer: "A" },

    // 概率算法常考题
    { id: "mc-151", question: "蒙特卡罗算法的特点是（ ）", options: ["总是正确", "总是给出答案可能错误", "可能失败", "以上都不对"], answer: "B" },
    { id: "mc-152", question: "拉斯维加斯算法的特点是（ ）", options: ["总是正确可能失败", "总是给出答案可能错误", "总是失败", "以上都不对"], answer: "A" },
    { id: "mc-153", question: "舍伍德算法的特点是（ ）", options: ["总是正确运行时间随机", "可能错误", "可能失败", "以上都不对"], answer: "A" },
    { id: "mc-154", question: "随机快速排序使用的是（ ）", options: ["舍伍德算法", "蒙特卡罗算法", "拉斯维加斯算法", "数值概率算法"], answer: "A" },
    { id: "mc-155", question: "Miller-Rabin素数测试使用的是（ ）", options: ["舍伍德算法", "蒙特卡罗算法", "拉斯维加斯算法", "数值概率算法"], answer: "B" },
    { id: "mc-156", question: "概率算法的优点是（ ）", options: ["平均时间复杂度低", "实现简单", "适用范围广", "以上都对"], answer: "D" },
    { id: "mc-157", question: "以下哪个不是概率算法（ ）", options: ["蒙特卡罗", "拉斯维加斯", "舍伍德", "动态规划"], answer: "D" },
    { id: "mc-158", question: "概率算法中，答案总是正确的是（ ）", options: ["蒙特卡罗", "拉斯维加斯", "舍伍德", "B和C"], answer: "D" },
    { id: "mc-159", question: "概率算法中，可能失败的是（ ）", options: ["蒙特卡罗", "拉斯维加斯", "舍伍德", "数值概率"], answer: "B" },
    { id: "mc-160", question: "概率算法中，答案可能错误的是（ ）", options: ["蒙特卡罗", "拉斯维加斯", "舍伍德", "数值概率"], answer: "A" },

    // P/NP问题常考题
    { id: "mc-161", question: "P类问题是指（ ）", options: ["多项式时间可解", "多项式时间可验证", "指数时间可解", "不可解"], answer: "A" },
    { id: "mc-162", question: "NP类问题是指（ ）", options: ["多项式时间可解", "多项式时间可验证", "指数时间可解", "不可解"], answer: "B" },
    { id: "mc-163", question: "NP完全问题的特点是（ ）", options: ["所有NP问题可归约到它", "多项式时间可解", "比P类简单", "以上都不对"], answer: "A" },
    { id: "mc-164", question: "P和NP的关系是（ ）", options: ["P包含NP", "NP包含P", "P等于NP", "无包含关系"], answer: "B" },
    { id: "mc-165", question: "以下哪个是NP完全问题（ ）", options: ["排序", "二分查找", "TSP", "最小生成树"], answer: "C" },
    { id: "mc-166", question: "P=NP问题是（ ）", options: ["已证明成立", "已证明不成立", "未解决", "不存在"], answer: "C" },
    { id: "mc-167", question: "如果P=NP成立，那么（ ）", options: ["所有NP问题都有多项式算法", "所有问题都不可解", "算法研究没有意义", "以上都不对"], answer: "A" },
    { id: "mc-168", question: "以下哪个是P类问题（ ）", options: ["TSP", "背包问题", "排序", "图着色"], answer: "C" },
    { id: "mc-169", question: "NP类问题包含（ ）", options: ["P类问题", "NP完全问题", "A和B", "以上都不对"], answer: "C" },
    { id: "mc-170", question: "NP完全问题是NP类中（ ）", options: ["最简单的", "最难的", "中等难度的", "不确定"], answer: "B" },

    // 排序算法常考题
    { id: "mc-171", question: "以下哪个排序算法是稳定的（ ）", options: ["快速排序", "堆排序", "归并排序", "选择排序"], answer: "C" },
    { id: "mc-172", question: "堆排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "B" },
    { id: "mc-173", question: "快速排序的最坏时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "C" },
    { id: "mc-174", question: "冒泡排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "C" },
    { id: "mc-175", question: "以下哪个排序算法是原地排序（ ）", options: ["归并排序", "快速排序", "计数排序", "基数排序"], answer: "B" },
    { id: "mc-176", question: "归并排序的空间复杂度是（ ）", options: ["O(1)", "O(logn)", "O(n)", "O(nlogn)"], answer: "C" },
    { id: "mc-177", question: "快速排序的平均时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "B" },
    { id: "mc-178", question: "选择排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "C" },
    { id: "mc-179", question: "插入排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(logn)"], answer: "C" },
    { id: "mc-180", question: "希尔排序的时间复杂度是（ ）", options: ["O(n)", "O(nlogn)", "O(n²)", "O(n^1.3)"], answer: "D" },

    // 图算法常考题
    { id: "mc-181", question: "Dijkstra算法适用于（ ）", options: ["无向图", "有向图", "带权图（非负权）", "所有图"], answer: "C" },
    { id: "mc-182", question: "Bellman-Ford算法可以处理（ ）", options: ["负权边", "负权环", "无向图", "所有选项都正确"], answer: "D" },
    { id: "mc-183", question: "Floyd-Warshall算法的时间复杂度是（ ）", options: ["O(n)", "O(n²)", "O(n³)", "O(nlogn)"], answer: "C" },
    { id: "mc-184", question: "拓扑排序适用于（ ）", options: ["无向图", "有向无环图", "有环图", "完全图"], answer: "B" },
    { id: "mc-185", question: "最小生成树的边数是（ ）", options: ["n", "n-1", "n+1", "2n"], answer: "B" },
    { id: "mc-186", question: "Prim算法的时间复杂度是（ ）", options: ["O(E)", "O(E+VlogV)", "O(V²)", "O(ElogE)"], answer: "B" },
    { id: "mc-187", question: "Kruskal算法的时间复杂度是（ ）", options: ["O(E)", "O(E+VlogV)", "O(V²)", "O(ElogE)"], answer: "D" },
    { id: "mc-188", question: "Dijkstra算法的时间复杂度是（ ）", options: ["O(V²)", "O(ElogV)", "O(E)", "O(VlogV)"], answer: "B" },
    { id: "mc-189", question: "图的深度优先搜索时间复杂度是（ ）", options: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"], answer: "C" },
    { id: "mc-190", question: "图的广度优先搜索时间复杂度是（ ）", options: ["O(V)", "O(E)", "O(V+E)", "O(V*E)"], answer: "C" },

    // 综合常考题
    { id: "mc-191", question: "算法的五个特性是（ ）", options: ["输入、输出、确定性、有限性、可行性", "输入、输出、正确性、效率、可读性", "时间、空间、正确性、可读性、可维护性", "以上都不对"], answer: "A" },
    { id: "mc-192", question: "时间复杂度O(nlogn)表示（ ）", options: ["线性时间", "平方时间", "线性对数时间", "指数时间"], answer: "C" },
    { id: "mc-193", question: "空间复杂度分析主要考虑（ ）", options: ["程序代码大小", "输入数据大小", "辅助空间大小", "输出数据大小"], answer: "C" },
    { id: "mc-194", question: "递归算法的空间复杂度主要取决于（ ）", options: ["递归深度", "问题规模", "输入大小", "输出大小"], answer: "A" },
    { id: "mc-195", question: "以下哪个算法不适合大规模问题（ ）", options: ["快速排序", "归并排序", "回溯法", "动态规划"], answer: "C" },
    { id: "mc-196", question: "算法设计的基本方法包括（ ）", options: ["分治、动态规划、贪心、回溯、分支限界", "排序、查找、图算法", "递归、迭代", "以上都对"], answer: "A" },
    { id: "mc-197", question: "算法的时间复杂度主要取决于（ ）", options: ["问题规模", "输入数据", "算法设计", "以上都对"], answer: "D" },
    { id: "mc-198", question: "以下哪个不是算法设计策略（ ）", options: ["分治", "动态规划", "贪心", "排序"], answer: "D" },
    { id: "mc-199", question: "算法分析的主要目的是（ ）", options: ["评估算法效率", "编写代码", "测试程序", "调试错误"], answer: "A" },
    { id: "mc-200", question: "算法的正确性是指（ ）", options: ["算法终止", "输出正确结果", "满足问题要求", "以上都对"], answer: "D" }
  ];

  // 注册到全局
  window.registerQuestions && window.registerQuestions('选择题', questions);
})();