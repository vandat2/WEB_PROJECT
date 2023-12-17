//Khoi tao danh sach san pham
 localStorage.removeItem('products');
 localStorage.removeItem('accounts')

function createProduct() {
    if (localStorage.getItem('products') == null) {
        let products = [{
            id: 1,
            status: 1, 
            title: 'Bạch Dạ Hành',
            img: 'image/1.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 150000,
            desc: 'Kosuke, chủ một tiệm cầm đồ bị sát hại tại một ngôi nhà chưa hoàn công, một triệu yên mang theo người cũng bị cướp mất. Sau đó một tháng, nghi can Fumiyo được cho rằng có quan hệ tình ái với nạn nhân và đã sát hại ông để cướp một triệu yên, cũng chết tại nhà riêng vì ngộ độc khí ga. Vụ án mạng ông chủ tiệm cầm đồ rơi vào bế tắc và bị bỏ xó. Nhưng với hai đứa trẻ mười một tuổi, con trai nạn nhân và con gái nghi can, vụ án mạng năm ấy chưa bao giờ kết thúc. Sinh tồn và trưởng thành dưới bóng đen cái chết của bố mẹ, cho đến cuối đời, Ryoji vẫn luôn khao khát được một lần đi dưới ánh mặt trời, còn Yukiho cứ ra sức vẫy vùng rồi mãi mãi chìm vào đêm trắng.'
        },
        {
            id: 2,
            status: 1, 
            title: 'Núi Chuột Quét',
            img: 'image/2.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 150000,
            desc: 'Mười năm trước, ở Tây Giao diễn ra hàng loạt vụ án c.ư.ỡ.ng h.iế.p và g.iế.t người. Mười năm sau, ở Núi Chuột Quét lại bốc lên một ngọn lửa khiến ai nấy đều chấn động. Ngọn lửa ấy thiêu rụi th.i th.ể của ba trẻ em và một người lớn, hiện trường vô cùng thảm khốc. Mười năm như một cây cầu, mà ở điểm đầu và điểm cuối của cây cầu ấy đều có sự xuất hiện của Chu Lập Bình. Đối với cảnh sát, Chu Lập Bình là một người rất đặc biệt. Sau vụ án Tây Giao, tuy là nghi phạm số một, song không ai có đủ bằng chứng kết tội Chu Lập Bình là kẻ gây ra loạt án ấy, vì vậy hắn chỉ phải ngồi tù cải tạo mười năm. Điều đáng nói là mười năm trước, hắn vừa mới mười tám, nhưng thái độ khi đối mặt với cảnh sát lại bình tĩnh, thờ ơ và lạnh lùng đến khó hiểu. Mười năm sau, vẫn với thái độ ấy, hắn phủ nhận toàn bộ tội ác đã xảy ra ở Núi Chuột Quét, khiến cảnh sát vừa bối rối vừa tức giận. Bỗng chốc, mọi nhận định thiện-ác, đúng-sai đều bị trộn lẫn vào nhau, chẳng thể phân biệt nổi. Ai mới là hung thủ thật sự và Chu Lập Bình đóng vai trò gì trong cả hai vụ án này? Trong quá trình lần theo dấu vết của hung thủ vụ án Núi Chuột Quét, những bí mật và tội ác khiến người đọc phải rợn gáy cũng được hé lộ. Tác giả Hô Diên Vân cho ta thấy những mặt ghê t.ở.m và kinh khủng nhất của con người chính trong cách đối xử với đồng loại của mình…'
        },
        {
            id: 3,
            status: 1, 
            title: 'Xứ Tuyết',
            img: 'image/3.jpg',
            category: 'Tiểu thuyết',
            oldprice:90000,
            price: 60000,
            desc: 'Xứ tuyết mang âm hưởng truyền thống lữ hành của các thi nhân văn sĩ Nhật Bản từ xa xưa. Câu chuyện theo bước chân của chàng trai trẻ Shimamura du hành ngoạn cảnh và tắm suối nước nóng. Shimamura, sinh ra và lớn lên ở một khu phố thương mại của Tokyo, đã lập gia đình, nhưng lại say mê với cái đẹp như bị một huyền lực điều khiển, vì vậy chàng đam mê theo học nghệ thuật vũ đạo Tây phương và hoạt kịch. Là một chàng trai tài tử nhàn rỗi thiếu thành khẩn với chính mình, lại có đôi lúc khát vọng tự tìm hiểu bản thân thôi thúc, nên chàng thích lên miền núi một mình và đã ba lần lên xuống xứ tuyết phía Bắc Nhật Bản trong ba mùa khác nhau Xuân - Thu - Đông.'
        },
        {
            id: 4,
            status: 1, 
            title: 'Billy Summers',
            img: 'image/4.jpg',
            category: 'Tiểu thuyết',
            oldprice:350000,
            price: 300000,
            desc: 'Billy Summers là một cựu lính bắn tỉa và sát thủ của Thủy quân lục chiến, người chỉ nhận công việc giết những kẻ thực sự xấu xa. Khi anh bày tỏ mong muốn từ bỏ cuộc sống sát thủ, Nick Majarian, một tên cướp mà Billy đã làm việc nhiều lần trước đây, đề nghị anh một công việc cuối cùng - một công việc trả trước 500.000 đô la và 1,5 triệu đô la sau khi hoàn thành.'

        },
        {
            id: 5,
            status: 1, 
            title: 'Bóng Ma Ký Ức',
            img: 'image/5.jpg',
            category: 'Tiểu thuyết',
            oldprice:160000,
            price: 140000,
            desc: 'Bóng ma ký ức cũng là một tác phẩm trinh thám xuất phát từ đề tài gia đình với nhân vật chính là Libby Day. Khi Libby bảy tuổi, mẹ và hai chị gái đã bị sát hại trong "Cuộc hiến tế của quỷ Sa- tăng". May mắn sống sót, cô trở nên nổi tiếng vì đã làm chứng chống lại người anh trai 15 tuổi, khẳng định Ben Day là kẻ giết người.'

        },

        {
            id: 6,
            status: 1, 
            title: 'Tên Sát Nhân Mercedes',
            img: 'image/6.jpg',
            category: 'Kinh dị',
            oldprice:150000,
            price: 130000,
            desc: 'Một tên sát nhân lái chiếc Mercedes lao thẳng vào đám đông ở hội chợ tìm kiếm việc làm ở miền Tây nước Mỹ khiến 8 người chết và hàng loạt người bị thương, còn tên sát nhân đã trốn thoát. Ngay khi cuộc điều tra đi vào ngõ cụt không một dấu tích thì viên thanh tra về hưu Hodges nhận được một bức thư đầy khiêu khích của kẻ tự nhận mình là tên sát nhân. Bắt đầu từ đây, một cuộc vờn bắt mèo đuổi chuột diễn ra giữa tên sát nhân và thanh tra già Hodges cùng 2 “đồng minh” với tính cách vô cùng lập dị.'

        },

        {
            id: 7,
            status: 1, 
            title: 'If It Bleeds',
            category: 'Kinh dị',
            img: 'image/7.jpg',
            oldprice:400000,
            price: 375000,
            desc: 'If It Bleeds là tuyển tập bốn cuốn tiểu thuyết ngắn chưa được xuất bản trước đây của nhà văn người Mỹ Stephen King. Các câu chuyện trong tuyển tập có tựa đề "Điện thoại của ông Harrigan", "Cuộc đời của Chuck", "Nếu nó chảy máu" và "Rat".'

        },

        {
            id: 8,
            status: 1, 
            title: 'Ring – Vòng Tròn Ác Nghiệt',
            img: 'image/8.jpg',
            category: 'Kinh dị',
            oldprice:80000,
            price: 58000,
            desc: 'Cái chết đến từ một cuộn băng. Hai đôi nam nữ vị thành niên lần lượt chết bởi cơn đau bót nghẹt tim một tuần sau khi xem phải một cuộn băng lạ trong một nhà nghỉ ngoại ô Tokyo, bên trên một cái giếng cũ…Mê mẩn khám phá ra bí ẩn đằng sau những cái chết kinh hoàng đó, Asakawa, một phóng viên đang háo hức vì danh vọng lao vào cuộc truy tìm dấu vết. Đến mức gã tự mình xem cuộn băng, và đối mặt với lời đe doạ hãi hùng kẻ nào đó đã đặt trong những hình ảnh cuộn băng ghi lại. Bảy ngày còn lại, vòng quay của Ring bắt đầu, sự khiếp hải của kẻ đã thấy ngọn núi lửa phun trào, những cái mặt ma quái, và cuối cùng, cái giếng cũ tiêu điều giữa khu rừng vắng… bắt đầu ngấm vào trong tim. Sự thật là đâu? Đâu là lời nguyền, đâu là lời giải?'
        },

        {
            id: 9,
            status: 1, 
            title: 'IT',
            category: 'Kinh dị',
            img: 'image/9.jpg',
            oldprice:300000,
            price: 256000,
            desc: 'Cuốn tiểu thuyết được kể thông qua các câu chuyện xen kẽ giữa hai thời kỳ và phần lớn được kể theo phương thức toàn tri của ngôi thứ ba. Nó đề cập đến các chủ đề mà cuối cùng đã trở thành chủ đề chính của King: sức mạnh của ký ức, tổn thương thời thơ ấu và tiếng vang tái diễn của nó ở tuổi trưởng thành, sự ác độc ẩn nấp bên dưới vẻ ngoài bình dị của thị trấn nhỏ nước Mỹ và vượt qua cái ác thông qua sự tin tưởng và hy sinh lẫn nhau.'
        },
        {
            id: 10,
            status: 1, 
            title: 'Carrie',
            category: 'Kinh dị',
            img: 'image/10.jpg',
            oldprice:250000,
            price: 230000,
            desc: 'Năm 1979 Chamberlain, Maine, Carietta "Carrie" White là một cô gái 16 tuổi bị chế giễu vì vẻ ngoài lôi thôi và niềm tin tôn giáo khác thường, được truyền dạy bởi người mẹ chuyên quyền của cô, Margaret. Một ngày nọ, Carrie có kinh lần đầu tiên khi đang tắm trong phòng thay đồ nữ sau giờ học thể dục. Carrie vô cùng sợ hãi, không hiểu gì về kinh nguyệt vì mẹ cô, người cho rằng tình dục là tội lỗi nên chưa bao giờ dạy cô. Trong khi Carrie hoảng sợ, các bạn cùng lớp của cô, dẫn đầu bởi một cô gái giàu có, nổi tiếng tên là Chris Hargensen, chế nhạo và ném băng vệ sinh và băng vệ sinh vào cô. Giáo viên thể dục, Rita Desjardin, yêu cầu Carrie tự trấn tĩnh và đưa cô ấy về nhà. Trên đường đi, Carrie luyện tập khả năng điều khiển đồ vật từ xa khác thường của mình. Cô nhớ lại việc sử dụng sức mạnh này khi cô lên ba để khiến đá từ trên trời rơi xuống. Khi Carrie về đến nhà, Margaret tức giận buộc tội Carrie và nhốt cô vào tủ...'
        },
        {
            id: 11,
            status: 1, 
            title: 'The Outsider',
            category: 'Kinh dị',
            img: 'image/11.jpg',
            oldprice:360000,
            price: 325000,
            desc: 'Ở Flint City, Oklahoma, thi thể bị cắt xẻo và bị cưỡng hiếp của Frankie Peterson được tìm thấy. Dấu vân tay và DNA tại hiện trường vụ án cũng như lời kể của nhân chứng đều cho thấy rõ huấn luyện viên thể thao địa phương Terence Maitland là kẻ giết người, vì vậy thám tử Ralph Anderson ra lệnh bắt giữ công khai...'
        },
        {
            id: 12,
            status: 1, 
            title: 'Dracula', 
            img: 'image/12.jpg',
            category: 'Kinh dị',
            oldprice:120000,
            price: 100000,
            desc: 'Dracula là cuốn tiểu thuyết của Bram Stoker, xuất bản năm 1897. Câu chuyện được xây dựng dựa trên nhật ký, thư từ và những tin tức stub trên báo liên quan. Tác phẩm mở đầu cảnh luật sư Jonathan Harker đi công tác và ở tại lâu đài của một quý tộc Transilvania, Bá tước Dracula. Harker trốn thoát khỏi tòa lâu đài sau khi phát hiện Dracula là ma cà rồng, và Bá tước chuyển tới Anh và tàn trấn trấn ven biển Whitby. Một nhóm nhỏ do Abraham Van Helsing đứng đầu, săn lùng Dracula và cuối cùng là sát thủ.'
        },
        {
            id: 13,
            status: 1, 
            title: 'Hồ Tuyệt Mệnh',
            img: 'image/13.jpg',
            category: 'Kinh dị',
            oldprice:150000,
            price: 100000,
            desc: 'Hồ Tuyệt Mệnh là phần 1 trong series Hồ Sơ Tội Ác gồm 7 phần, tập trung khai thác yếu tố ác quỷ tâm linh. Đây là một trong những tác phẩm mới của Quỷ Cổ Nữ, tác giả của Kỳ Án Ánh Trăng, Đau Thương Đến Chết... những tác phẩm đã thổi một luồng gió mới vào thể loại văn học kinh dị Trung Quốc'
        },
        {
            id: 14,
            status: 1, 
            title: 'Harry Potter And The Chamber of Secrets',
            img: 'image/14.jpg',
            category: 'Tiểu thuyết',
            oldprice:190000,
            price: 173000,
            desc: 'Khi đang nghỉ hè tại Dursleys, Harry Potter, 12 tuổi, được Dobby, một gia tinh đến thăm. Ông ấy nói Harry đang gặp nguy hiểm và không được quay lại Hogwarts. Harry từ chối, nên Dobby đã dùng phép thuật phá hỏng bữa tiệc tối của dì Petunia và chú Vernon. Quá tức giận, chú Vernon nhốt Harry vào phòng. Bộ Pháp thuật gửi thông báo cáo buộc Harry thực hiện phép thuật khi chưa đủ tuổi vị thành niên và đe dọa đuổi học trường Hogwarts...'
        },
        {
            id: 15,
            status: 1, 
            title: 'Harry Potter And The Goblet Of Fire',
            img: 'image/15.jpg',
            category: 'Tiểu thuyết',
            oldprice:200000,
            price: 173000,
            desc: 'Vào mùa hè, nhà Weasley mời Harry Potter tham dự trận chung kết Cúp Quidditch thế giới, diễn ra giữa Bulgaria và Cộng hòa Ireland. Trận đấu kết thúc với chiến thắng thuộc về người Ireland, nhưng khu cắm trại bị tấn công bởi những người theo cũ của Voldemort được gọi là Tử thần Thực tử. Không ai bị giết, nhưng Dấu hiệu Hắc ám được kích hoạt và được phát hiện là do gia tinh Winky của Barty Crouch thi triển...'
        },
        {
            id: 16,
            status: 1, 
            title: 'Harry Potter And The Deathly Hallows',
            img: 'image/16.jpg',
            category: 'Tiểu thuyết',
            oldprice:190000,
            price: 173000,
            desc: 'Harry sắp bước sang tuổi mười bảy và sẽ mất đi sự bảo vệ phép thuật của người mẹ đã khuất. Lệnh của các thành viên Phoenix di dời gia đình Dursley để bảo vệ họ. Harry đang được bay tới Hang Sóc, cùng với bạn bè và đồng minh đóng vai trò là những mồi nhử giống hệt nhau. Tử thần Thực tử ngay lập tức tấn công, và trong trận chiến sau đó, "Mắt điên" Moody và Hedwig bị giết trong khi George Weasley bị thương. Voldemort đến để giết Harry, cây đũa phép của Harry đã chống đỡ được cuộc tấn công...'
        },
        {
            id: 17,
            status: 1, 
            title: 'Chú Bé Mang PyJama Sọc',
            img: 'image/17.jpg',
            category: 'Tiểu thuyết',
            oldprice:90000,
            price: 70000,
            desc: 'Bruno là một cậu bé 8 tuổi lớn lên trong Chiến tranh thế giới thứ hai ở Berlin cùng với gia đình của cậu. Cậu sống trong một ngôi nhà lớn cùng bố mẹ và chị gái 12 tuổi tên là Gretel và hai cô người hầu Maria và Lars. Bố cậu bé là một sĩ quan Schutzstaffel có địa vị, sau khi có cuộc viếng thăm từ Adolf Hitler (được nhắc đến trong tiểu thuyết là The Fury khi Bruno nghe nhầm từ Führer [tương tự với Out-With]) và Eva Braun, được thăng cấp lên "Commandant", và cả gia đình phải chuyển đến một vùng được gọi là Out-With (thựa ra là Auschwitz)...'
        },
        {
            id: 18,
            status: 1, 
            title: 'Cây Cam Ngọt Của Tôi', 
            img: 'image/18.jpg',
            category: 'Tiểu thuyết',
            oldprice:90000,
            price: 86000,
            desc: 'Zeze là một cậu bé sống ở Bangu, Rio de Janeiro với gia đình nghèo khó của mình. Bởi vì mọi người đều bận rộn hỗ trợ gia đình, Zeze thường bị bỏ lại một mình với em trai Luis, và cuối cùng làm những hành động tinh nghịch khiến cha mẹ và các anh chị của cậu tức giận đến mức họ kỷ luật cậu về những gì cậu đã làm.'
        },
        {
            id: 19,
            status: 1, 
            title: 'A Game Of Thrones',
            img: 'image/19.jpg',
            category: 'Tiểu thuyết',
            oldprice:800000,
            price: 700000,
            desc: 'Sau cái chết của Lãnh chúa Jon Arryn, cố vấn chính của Vua Robert Baratheon, Robert chiêu mộ người bạn thời thơ ấu của mình là Eddard "Ned" Stark, hiện là Người cai quản phương Bắc, để thay thế Arryn làm Cánh tay của Nhà vua, và hứa gả con gái Sansa của ông cho Robert con trai Joffrey. Ned chấp nhận vị trí này khi biết rằng Lysa, góa phụ của Arryn tin rằng anh đã bị vợ của Robert là Nữ hoàng Cersei Lannister và gia đình bà đầu độc. Ngay sau đó, Bran, con trai của Ned, phát hiện ra Cersei quan hệ tình dục với anh trai song sinh của cô, Jaime Lannister, người đã ném Bran khỏi tháp để che giấu chuyện ngoại tình của họ, khiến anh hôn mê và liệt hai chân...'
        },
        {
            id: 20,
            status: 1, 
            title: 'Anne Tóc Đỏ Làng Avonlea',
            img: 'image/20.jpg',
            category: 'Tiểu thuyết',
            oldprice:90000,
            price: 70000,
            desc: 'Mới ngày nào cô bé Anne mặt tàn nhang và dễ kích động vừa mới đặt chân lên đảo Hoàng Tử Edward đã gây bao xôn xao, xáo trộn. Vậy mà giờ đây Anne đã vụt lớn thành một thiếu nữ mười sáu tuổi tươi tắn và xinh đẹp. Tuổi mười sáu đặt lên vai cô nhiều trọng trách: một cô giáo làng với tham vọng gieo những ước vọng đẹp đẽ trong tâm hồn trẻ thơ, một sáng lập viên Hội Cải tạo với mong muốn biến Avonlea thành một ngôi làng xanh sạch đẹp hơn, và một người bảo hộ bất đắc dĩ của hai đứa bé sinh đôi mồ côi rất đáng yêu nhưng cũng gây lắm chuyện đau đầu. Nhưng tuổi mười sáu vẫn không làm mất đi trong Anne tính lãng mạn vô phương cứu chữa cũng như chẳng khiến Anne thôi vướng vào vô số sự cố dở khóc dở cười chẳng khác gì những học trò nhỏ tinh nghịch và hăng hái của cô.'
        },
        {
            id: 21,
            status: 1, 
            title: 'Người Đua Diều',
            category: 'Tiểu thuyết',
            img: 'image/21.jpg',
            oldprice:150000,
            price: 120000,
            desc: 'Assef là một cậu bé ưa bạo lực, thường hay trêu chọc Amir vì cậu chơi thân với Hassan. Bởi lẽ, theo Assef, Hassan là người Hazara, một chủng tộc hạ đẳng thuộc về vùng núi Hazarajat. Assef mang nửa dòng máu Pashtun. Vì mẹ là người Đức nên Assef thừa hưởng nét đặc trưng tóc hung, mắt xanh. Một ngày nọ, Assef định tấn công Amir bằng nắm đấm thép không gỉ mà cậu luôn mang theo bên người. May mắn cho Amir là Hassan đã bảo vệ cậu, đồng thời dọa sẽ bắn mù mắt Assef bằng một chiếc ná cao su. Trước khi bỏ đi, Assef thề sẽ trả mối nhục này...'
        },
        {
            id: 22,
            status: 1, 
            title: 'Không Gia Đình', 
            category: 'Tiểu thuyết',
            img: 'image/22.jpg',
            oldprice:180000,
            price: 150000,
            desc: 'Tác phẩm phác họa nhiều nhân vật, dù quan trọng nhiều hay ít, đã giúp đỡ cậu bé Rémi trên hành trình của cậu cũng như trong cuộc sống của cậu, đặc biệt là đi tìm gia đình thật của cậu.'
        },

        {
            id: 23,
            status: 1, 
            title: 'Nhà Giả Kim', 
            category: 'Tiểu thuyết',
            img: 'image/23.jpg',
            oldprice:80000,
            price: 60000,
            desc: 'Nhân vật chính trong truyện là Santiago. Cha mẹ Santiago mong muốn cậu trở thành linh mục để mang lại niềm tự hào cho gia đình, nhưng vì ước mơ từ nhỏ của chính mình là đi đây đi đó khắp thế giới, Santigo đã thuyết phục được cha cậu và trở thành một người chăn cừu. Dưới vai một người chăn cừu, cậu chu du khắp vùng quê Andaluisa, phía nam Tây Ban Nha, trong vài năm, tận hưởng một cuộc sống vô tư lự và phiêu lưu. Trên đường tới một thành phố nhỏ mà một năm trước cậu đã từng tới để bán lông cừu và gặp người con gái của ông chủ tiệm - cô gái mà cậu thầm mến, Santiago có một giấc mơ cậu không thực sự hiểu lặp lại hai lần. Nhớ ra ở Tarifa có một bà thầy bói đoán mộng, Santiago quyết định đi gặp bà lão. Cái già bà thầy bói đưa ra là một lời thề - rằng khi tìm được kho tàng ở Kim tự tháp Ai Cập, cậu phải chia một phần mười của nó cho bà. Thế nhưng, lời giải đáp cậu nhận được từ bà lại không khiến cậu thực sự tin tưởng và hài lòng: Hãy đi đến Kim tự tháp Ai Cập…'
        },

        {
            id: 24,
            status: 1, 
            title: 'Bố Con Cá Gai',
            img: 'image/24.jpg',
            category: 'Tiểu thuyết',
            oldprice:130000,
            price: 110000,
            desc: 'Tác phẩm là câu chuyện đầy xúc cảm về hành trình của hai bố con Daum. Daum là kết quả của một tình yêu đã đi dần về hồi kết của bố mẹ. Hình ảnh người mẹ bỏ rơi bố con để sang Pháp thực hiện giấc mơ họa sĩ là vết sẹo đầu tiên và mãi không thể lành lại trong tim Daum. Thế nhưng câu chuyện không dừng lại ở đó, mọi sự khổ đau trên đời ập đến khi bác sĩ “tuyên bố” em mắc phải căn bệnh máu trắng quái ác.'
        },
        {
            id: 25,
            status: 1, 
            title: 'The Lord Of The Rings – The Fellowship Of The Rings',
            img: 'image/25.jpg',
            category: 'Tiểu thuyết',
            oldprice:150000,
            price: 130000,
            desc: 'Đoàn hộ nhẫn (tiếng Anh: The Fellowship of the Ring) là phần đầu tiên trong bộ tiểu thuyết giả tưởng Chúa tể những chiếc nhẫn của nhà văn J. R. R. Tolkien. Bộ tiểu thuyết này là một phần trong hệ thống tác phẩm giả tưởng về vùng Trung Địa …'
        },

        {
            id: 26,
            status: 1, 
            title: 'The Lord Of The Rings – The Return Of The King',
            category: 'Tiểu thuyết',
            img: 'image/26.jpg',
            oldprice:130000,
            price: 115000,
            desc: 'Chúa tể Sauron bắt đầu những bước cuối cùng trong cuộc xâm lược Trung Địa của hắn, vì thế phù thủy Gandalf và vua Theoden của xứ Rohan tập hợp quân đội nhằm bảo vệ thủ đô của Gondor - thành Minas Tirith khỏi mối đe dọa. Aragorn cuối cùng đã lấy được ngai vàng của Gondor và triệu hồi Đội quân người chết để giúp anh đánh bại đội quân của Sauron. Nhưng cuối cùng, thậm chí khi đã huy động toàn bộ sức mạnh, họ nhận ra rằng họ không thể chiến thắng; vì thế mọi thứ phải dựa trên vai của hai người Hobbit, Frodo và Sam, mang trên người gánh nặng của chiếc nhẫn và đối đầu với sự phản bội của Gollum. Sau cuộc hành trình dài, cuối cùng họ cũng đến được vùng đất đầy nguy hiểm - Mordor, nhằm tìm cách hủy diệt chiếc nhẫn chúa tại nơi nó được tạo ra - ngọn lửa núi Doom (Diệt Vong).'
        },

        {
            id: 27,
            status: 1, 
            title: 'The Lord Of The Rings - The Two Tower',
            category: 'Tiểu thuyết',
            img: 'image/27.jpg',
            oldprice:110000,
            price: 96000,
            desc: 'Hai tòa tháp (tiếng Anh: The Two Towers) là phần thứ 2 trong bộ tiểu thuyết giả tưởng Chúa tể những chiếc nhẫn của nhà văn J. R. R. Tolkien. Phần đầu và phần cuối bộ sách là các cuốn Đoàn hộ nhẫn ( The Fellowship of the Ring) và Nhà vua trở về (The Return of the King).'
        },

        {
            id: 28,
            status: 1, 
            title: 'Bắt Chước Để Thành Công', 
            category: 'Self help',
            img: 'image/28.jpg',
            oldprice:100000,
            price: 96000,
            desc: 'Tachikawa Mitsuaki không ngại tiết lộ bí quyết thành công của ông, đó chính là bắt chước. Con người vốn là loài động vật dễ bị ảnh hưởng, dù muốn hay không cũng đang chịu ảnh hưởng từ môi trường và những người xung quanh, đây cũng chính là việc nhân loại thích ứng với môi trường để sinh tồn và phát triển. Nói cách khác, bắt chước cũng chính là học hỏi.'
        },

        {
            id: 29,
            status: 1, 
            title: 'Lối Sống Tối Giản Của Người Nhật',
            category: 'Self help',
            img: 'image/29.jpg',
            oldprice:90000,
            price: 85000,
            desc: 'Lối sống tối giản của người Nhật xoay quanh 4 nguyên tắc: Wabi-sabi, Shibui, Iki và Danshari. Những nguyên tắc này có điểm chung là để cao sự mộc mạc và hướng về sự thực chất nhiều hơn.'
        },

        {
            id: 30,
            status: 1, 
            title: 'Harvard Bốn Rưỡi Sáng',
            category: 'Self help',
            img: 'image/30.jpg',
            oldprice:140000,
            price: 120000,
            desc: 'Harvard bốn rưỡi sáng sử dụng hình ảnh Harvard như một biểu tượng xuyên suốt, kể lại các câu chuyện có tính cách điệu về Harvard như một phương thức nhằm thu hút bạn đọc đến với cuốn sách, để từ đó chuyển tải những chỉ dẫn, khuyến khích, gợi ý cùng thông điệp vừa thực dụng vừa bay bổngtới các bạn trẻ đang ngồi trên ghế nhà trường và chuẩn bị bước vào đời.'
        },


        {
            id: 31,
            status: 1, 
            title: 'Hiểu Về Trái Tim',
            category: 'Self help',
            img: 'image/31.jpg',
            oldprice:150000,
            price: 130000,
            desc: 'Là tác phẩm đầu tay của nhà sư Minh Niệm, người sáng lập dòng thiền hiểu biết (Understanding Meditation), kết hợp giữa tư tưởng Phật giáo Đại thừa và Thiền nguyên thủy Vipassana, nhưng Hiểu Về Trái Tim không phải tác phẩm thuyết giáo về Phật pháp. Cuốn sách rất “đời” với những ưu tư của một người tu nhìn về cõi thế. Ở đó, có hạnh phúc, có đau khổ, có tình yêu, có cô đơn, có tuyệt vọng, có lười biếng, có yếu đuối, có buông xả… Nhưng, tất cả những hỉ nộ ái ố ấy đều được khoác lên tấm áo mới, một tấm áo tinh khiết và xuyên suốt, khiến người đọc khi nhìn vào, đều thấy mọi sự như nhẹ nhàng hơn…'
        },

        {
            id: 32,
            status: 1, 
            title:'Bước Chậm Lại Giữa Thế Gian Vội Vã',
            category: 'Self help',
            img: 'image/32.jpg',
            oldprice:100000,
            price: 80000,
            desc: 'Chen vai thích cánh để có một chỗ bám trên xe buýt giờ đi làm, nhích từng xentimét bánh xe trên đường lúc tan sở, quay cuồng với thi cử và tiến độ công việc, lu bù vướng mắc trong những mối quan hệ cả thân lẫn sơ… bạn có luôn cảm thấy thế gian xung quanh mình đang xoay chuyển quá vội vàng?'
        },

        {
            id: 33,
            status: 1, 
            title: 'Đắc Nhân Tâm', 
            category: 'Self help',
            img: 'image/33.jpg',
            oldprice:180000,
            price: 150000,
            desc: 'Quyển sách đưa ra các lời khuyên về cách thức cư xử, ứng xử và giao tiếp với mọi người để đạt được thành công trong cuộc sống.'
        },

        {
            id: 34,
            status: 1, 
            title: 'Dám Bị Ghét',
            category: 'Self help',
            img: 'image/34.jpg',
            oldprice:100000,
            price: 80000,
            desc: '“Dám bị ghét” là một hình bóng của một tác phẩm kinh điển, dễ dàng cuốn hút người đọc bởi được viết dưới hình thức một cuộc họi thoại giữa một cậu thanh niên và triết gia.'
        },

        {
            id: 35,
            status: 1, 
            title:'Hãy Sống Ở Thể Chủ Động',
            category: 'Self help',
            img: 'image/35.jpg',
            oldprice:110000,
            price: 89000,
            desc: 'Vốn là một cán bộ Đoàn năng động, nhiệt huyết ở thời sinh viên và sau này là một doanh nhân thành đạt trong xã hội, Nguyễn Tuấn Quỳnh đã đem những kinh nghiệm anh đã có, những thất bại mà anh đã trải qua và cả những bài học đáng quý trong cuộc sống, những đất nước xinh đẹp mà anh từng đặt chân đến, v.v…gom góp vào một quyển sách nhỏ với tựa đề, cũng là phương châm sống của anh “Hãy sống ở thể chủ động”.'
        },

        {
            id: 36,
            status: 1, 
            title: '999 Lá Thư Gửi Cho Chính Mình',
            category: 'Self help',
            img: 'image/36.jpg',
            oldprice:100000,
            price: 91000,
            desc: '“999 lá thư gửi cho chính mình” là một tác phẩm đặc biệt đầy cảm hứng đến từ tác giả văn học mạng nổi tiếng Miêu Công Tử, mang một màu sắc riêng biệt qua những lời thư nhỏ nhắn nhủ đến người đọc về giá trị cuộc sống, tình yêu, tuổi trẻ, tương lai.'
        },

        {
            id: 37,
            status: 1, 
            title: 'Cà Phê Cùng Tony',
            category: 'Self help',
            img: 'image/37.jpg',
            oldprice:90000,
            price: 72000,
            desc: ', Cà phê cùng Tony phản ánh hiện thực những thói hư tật xấu, những thói quen không tốt của con người. Độc giả sẽ thấy xuất hiện những nội dung như những kỹ năng và kiến thức mà tất cả mọi người đều phải chuẩn bị để có tương lai tốt đẹp. Ngoài ra, tác giả cũng không quên nhắc đến những cách ứng xử văn minh mà ai cũng cần tiếp thu.'
        },
        {
            id: 38,
            status: 1, 
            title:'Ngủ Ít Vẫn Khỏe', 
            category: 'Self help',
            img: 'image/38.jpg',
            oldprice:100000,
            price: 92000,
            desc: 'Nếu có thể lĩnh hội “Phương pháp ngủ ngon trong 5 tiếng” được giới thiệu trong cuốn sách Ngủ ít vẫn khỏe, cho dù thời gian dành cho giấc ngủ của bạn có ngắn đi chăng nữa, cũng sẽ không có chuyện bạn phải trải qua một buổi sáng khổ sở, không tỉnh táo, mệt mỏi vẫn còn chưa biến mất, và làm việc kém hiệu quả do cả ngày trong trạng thái buồn ngủ.'
        },
        {
            id: 39,
            status: 1, 
            title: 'Tuổi Trẻ Đáng Giá Bao Nhiêu',
            category: 'Self help',
            img: 'image/39.jpg',
            oldprice:80000,
            price: 65000,
            desc: '“Bạn hối tiếc vì không nắm bắt lấy một cơ hội nào đó, chẳng có ai phải mất ngủ. Bạn trải qua những ngày tháng nhạt nhẽo với công việc bạn căm ghét, người ta chẳng hề bận lòng. Bạn có chết mòn nơi xó tường với những ước mơ dang dở, đó không phải là việc của họ. Suy cho cùng, quyết định là ở bạn. Muốn có điều gì hay không là tùy bạn. Nên hãy làm những điều bạn thích. Hãy đi theo tiếng nói trái tim. Hãy sống theo cách bạn cho là mình nên sống. Vì sau tất cả, chẳng ai quan tâm.”'
        },

        {
            id: 40,
            status: 1, 
            title: 'The Silence Of The Lambs', 
            category: 'Tiểu thuyết',
            img: 'image/40.jpg',
            oldprice:90000,
            price: 85000,
            desc: 'Clarice Starling, một nhân viên thực tập của FBI, được Jack Crawford - người đứng đầu bộ phận FBI giao nhiệm vụ phải trình bày một bảng câu hỏi cho bác sĩ tâm thần pháp y tài giỏi và kẻ giết người hàng loạt ăn thịt người - Hannibal Lecter. Ông ta đang thụ án 9 bản án chung thân liên tiếp trong một bệnh viện tâm thần ở Maryland vì một loạt vụ giết người...'
        },

        {
            id: 41,
            status: 1, 
            title: 'Thiên Tài Bên Trái Kẻ Điên Bên Phải',
            category: 'Self help',
            img: 'image/41.jpg',
            oldprice:140000,
            price: 120000,
            desc: 'Thiên tài bên trái, kẻ điên bên phải là cuốn sách dành cho những người điên rồ, những kẻ gây rối, những người chống đối, những mảnh ghép hình tròn trong những ô vuông không vừa vặn… những người nhìn mọi thứ khác biệt, không quan tâm đến quy tắc. Bạn có thể đồng ý, có thể phản đối, có thể vinh danh hay lăng mạ họ, nhưng điều duy nhất bạn không thể làm là phủ nhận sự tồn tại của họ. Đó là những người luôn tạo ra sự thay đổi trong khi hầu hết con người chỉ sống rập khuôn như một cái máy. Đa số đều nghĩ họ thật điên rồ nhưng nếu nhìn ở góc khác, ta lại thấy họ thiên tài. Bởi chỉ những người đủ điên nghĩ rằng họ có thể thay đổi thế giới mới là những người làm được điều đó.'
        },
        {
            id: 42,
            status: 1, 
            title: 'Trên Đường Băng',
            category: 'Self help',
            img: 'image/42.jpg',
            oldprice:100000,
            price: 80000,
            desc: 'Cuốn sách Trên đường băng hướng tới đối tượng là độc giả trẻ, là tập hợp những câu chuyện được đăng tải trên fanpage facebook của Tony Buổi Sáng. Nhưng nội dung được tác giả chọn lọc một cách có chủ đích, khác hoàn toàn với loại tản văn thông thường.'
        },
        {
            id: 43,
            status: 1, 
            title: 'Chí Phèo',
            category: 'Truyện ngắn',
            img: 'image/43.jpg',
            oldprice:250000,
            price: 225000,
            desc: 'Khái quát một hiện tượng xã hội ở nông thôn Việt Nam trước năm 1945, một bộ phận nông dân lao động lương thiện bị đẩy vào con đường tha hóa, lưu manh hóa. Nhà văn đã kết án đanh thép cái xã hội tàn bạo tàn phá cả thể xác và tâm hồn người nông dân lao động, đồng thời khẳng định bản chất lương thiện của họ, ngay trong khi họ bị vùi dập mất cả nhân hình, nhân tính. Chí Phèo là một tác phẩm có giá trị hiện thực và giá trị nhân đạo sâu sắc, mới mẻ.'
        },
        {
            id: 44,
            status: 1, 
            title: 'Vợ Nhặt',
            category: 'Truyện ngắn',
            img: 'image/44.jpg',
            oldprice:80000,
            price: 51000,
            desc: 'Vợ nhặt là một tác phẩm văn học của nhà văn Kim Lân viết về thời kỳ xảy ra nạn đói năm 1945 diễn ra tại Thái Bình. Được in trong tập Con chó xấu xí (truyện ngắn 1962), tiền thân của truyện là tiểu thuyết Xóm ngụ cư (1946) được viết ngay sau Cách mạng tháng Tám nhưng còn dang dở và bị mất bản thảo. Về sau (1954), tác giả đã dựa vào cốt truyện cũ để viết truyện ngắn này.'
        },
        {
            id: 45,
            status: 1, 
            title: 'Sống Mòn', 
            category: 'Tiểu thuyết',
            img: 'image/45.jpg',
            oldprice:60000,
            price:48000,
            desc: ' Nội dung của tác phẩm nói lên bi kịch của người trí thức tiểu tư sản trong xã hội cũ, cái xã hội tàn nhẫn đã vùi dập mọi ước mơ, hoài bão của mình, tước đi ý nghĩa sự sống chân chính của con người.'
        },
        {
            id: 46,
            status: 1, 
            title: 'Bước Đường Cùng',
            category: 'Tiểu thuyết',
            img: 'image/46.jpg',
            oldprice:90000,
            price: 68000,
            desc: 'Bước đường cùng kể về cuộc đời đầy đau khổ dằng dặc của anh Pha trước Cách mạng tháng Tám. Hồi đó anh khỏe mạnh, trai tráng, có một vợ một con. Với tuổi tác, sức vóc cộng thêm tính cần cù, chăm chỉ thì đời sống gia đình anh cũng không đến nỗi lao đao, vất vả. Nhưng chế độ thực dân nửa phong kiến khiến không chỉ anh Pha mà hàng triệu nông dân như anh rơi vào bước đường cùng.'
        },
        {
            id: 47,
            status: 1, 
            title:'Trăm Năm Cô Đơn',
            category: 'Tiểu thuyết',
            img: 'image/47.jpg',
            oldprice:200000,
            price: 170000,
            desc: 'Câu chuyện kể về một dòng họ và ngôi làng họ sống, Macondo qua một trăm năm, tựa như một phần lịch sử của Colombia. Macondo là ngôi làng do Gabriel Garcia Marquez tưởng tượng ra, dựa trên những ký ức của ông về ngôi làng thời niên thiếu của mình, điều này đã được ông kể lại trong cuốn hồi ký Sống để kể lại ( Vivir para contarla). Dòng họ Buendia bao gồm 7 thế hệ. Người đầu tiên trong dòng họ là Jose Acardio Buendia và người cuối cùng của dòng họ là Aureliano đã bị kiến ăn khi vừa mới được sinh ra. Dòng họ này đã tự lưu đày vào cõi cô đơn để chạy trốn tội loạn luân.'
        },
        {
            id: 48,
            status: 1, 
            title: 'Làm Đĩ',
            category: 'Tiểu thuyết',
            img: 'image/48.jpg',
            oldprice:70000,
            price: 52000,
            desc: 'Làm đĩ là một cuốn tiểu thuyết của nhà văn Việt Nam Vũ Trọng Phụng, tác phẩm được viết vào năm 1936 và xuất bản vào năm 1937. Đây được coi là cuốn tiểu thuyết đầu tiên của Việt Nam đề cập đến vấn đề mại dâm.'
        },
        {
            id: 49,
            status: 1, 
            title: 'Gió Đầu Mùa', 
            category: 'Truyện ngắn',
            img: 'image/49.jpg',
            oldprice:70000,
            price: 50000,
            desc: 'Gồm các truyện: Đứa Con Đầu Lòng, Nhà Mẹ Lê, Những Ngày Mới, Duyên Số, Một Cơn Giận, Tiếng Chim Kêu, Cái Chân Què, Đói, Cô Áo Luạ Hồng, Một Đời Người, Người Lính Cũ, Hai Lần Chết, Gió Lạnh Đầu Mùa'
        },
        {
            id: 50,
            status: 1, 
            title:'Đời Thừa', 
            category: 'Truyện ngắn',
            img: 'image/50.jpg',
            oldprice:80000,
            price: 63000,
            desc: 'Từ ngẩng đầu lên nhìn Hộ ba lần. Ba lần, Từ muốn nói nhưng lại không dám nói. Hắn đang đọc chăm chú quá. Ðôi lông mày rậm của hắn châu đầu lại với nhau và hơi xếch lên một chút. Ðôi mắt sáng quắc có vẻ lồi ra. Cái trán rộng hơi nhăn. Ðôi lưỡng quyền[1] đứng sừng sững trên bờ hai cái hố sâu của má thì bóng nhẫy. Cả cái mũi cao và thẳng tắp cũng bóng lên như vậy. Cái mặt hốc hác ấy, nghiêng nghiêng bên trên quyển sách, trông khắc khổ đến thành dữ tợn. Từ thấy sợ...'
        },
        {
            id: 51,
            status: 1, 
            title: 'Vang Bóng Một Thời',
            category: 'Truyện ngắn',
            img: 'image/51.jpg',
            oldprice:70000,
            price: 52000,
            desc: 'Vang bóng một thời gồm 14 tùy bút hoặc truyện ngắn: Bữa rượu máu (hay Chém treo ngành), Những chiếc ấm đất, Thả thơ, Đánh thơ, Hương cuội, Ngôi mả cũ, Chữ người tử tù, Ném bút chì, Chén trà trong sương sớm, Một cảnh thu muộn, Báo oán, Trên đỉnh non Tản, Xác Ngọc Lam, Vườn Xuân Lan Tạ Chủ.'
        },
        {
            id: 52,
            status: 1, 
            title: 'Nắng Trong Vườn',
            category: 'Truyện ngắn',
            img: 'image/52.jpg',
            oldprice:60000,
            price: 40000,
            desc: 'KHI TÔI QUAY LẠI NHÌN CHỒNG NÀNG, tôi thấy rõ cái lãnh đạm của người đàn ông ấ Nàng có sung sướng không? Nàng có còn nhớ đến tôi không? Ngậm ngùi, tôi nghĩ đến cuộc ái ân ngắn ngủ mấy tháng hè: cái tình yêu biết đâu chẳng vẫn còn để lại trong lòng nàng một vẻ rực rỡ như ánh nắng trong vườn.'
        },

        {
            id: 53,
            status: 1, 
            title: 'Ngọn Đèn Không Tắt', 
            category: 'Truyện ngắn',
            img: 'image/53.jpg',
            oldprice:20000,
            price: 13000,
            desc: 'Ngọn đèn không tắt là bức tranh sinh động về thanh niên hôm nay trên mọi mặt đời sống; là tập truyện ngắn vừa hấp dẫn vừa thuyết phục. Với giọng văn mộc mạc bình dị, với ngôn ngữ đời thường đã tạo nên một không khí rất tự nhiên về màu sắc, hương vị của mảnh đất cuối cùng tổ quốc. Qua ngòi bút của Nguyễn Ngọc Tư, những con người lam lũ giản dị, bộc trực ấy chứa bên trong cả một tâm hồn vừa nhân hậu vừa tinh tế qua cách đối nhân xử thế.'
        },
        {
            id: 54,
            status: 1, 
            title:'Bàn Có Năm Chỗ Ngồi', 
            category: 'Truyện ngắn',
            img: 'image/54.jpg',
            oldprice:120000,
            price: 100000,
            desc: 'Câu chuyện xoay quanh tình bạn của năm đứa trẻ ngồi cùng bàn trong lớp 8A2: Huy, Bảy, Hiền, Quang, Đại, năm con người với năm tính cách, hoàn cảnh khác nhau cùng nhiều trò nghịch ngợm, những mâu thuẫn trẻ con trong lứa tuổi cắp sách tới trường. Mộc mạc, chân chất, vô tư, trong sáng… mỗi nhân vật là một tính cách sống động của lứa tuổi học trò mà ai cũng có thể bắt gặp trong ký ức của mình.'
        },
        {
            id: 55,
            status: 1, 
            title: 'Hoa Hồng Xứ Khác', 
            category: 'Truyện ngắn',
            img: 'image/55.jpg',
            oldprice:140000,
            price: 120000,
            desc: 'Trong truyện, Ngữ, Khoa và Hòa lé đều say mê cô bạn cùng lớp Gia Khanh. Cái cô gái bị ba người cùng theo đó sẽ phải làm sao. Ba anh chàng làm gì để “chiến thắng”. Điều lý thú là gần như tác giả tái hiện lại thời học trò của mình với ngôn ngữ thời bây giờ nên các bạn đọc trẻ sẽ tìm thấy hình bóng của chính mình trong đó.'
        },
        {
            id: 56,
            status: 1, 
            title:'Giết Con Chim Nhại',
            category: 'Tiểu thuyết',
            img: 'image/56.jpg',
            oldprice:110000,
            price: 90000,
            desc: 'Giết con chim nhại lấy bối cảnh Alabama, một tiểu bang miền Nam rất nặng thành kiến phân biệt chủng tộc và được viết trong thời gian mà phong trào đấu tranh của những người da màu, nhất là của Martin Luther King, Jr., đang lan rộng tới tầm cỡ quốc gia. Rõ nhất là vụ Tẩy chay xe buýt ở Mongomery, Alabama; kéo dài từ tháng 12 năm 1955 đến tháng 12 năm 1956, với kết quả là một phán quyết của Tối cao pháp viện tuyên bố các luật phân cách chỗ ngồi trên xe buýt theo màu da được áp dụng ở Montgomery và cả Alabama là vi hiến. Nên không ngạc nhiên gì khi chủ đề lớn của tác phẩm là vấn đề phân biệt chủng tộc.'
        },
        {
            id: 57,
            status: 1, 
            title: 'Ánh Lửa trong Tro Tàn', 
            category: 'Tiểu thuyết',
            img: 'image/57.jpg',
            oldprice:150000,
            price: 135000,
            desc: 'Truyện xoay quanh 2 nhân vật chính thế nên từng chương sẽ được thay phiên nhau kể bởi 1 trong 2. Cái hay trong cách kể này là có thể khiến người đọc biết được suy nghĩ của mỗi nhân vật, qua đó có thể hiểu được và thông cảm cho mỗi hành động, mỗi quyết định của họ.'
        },
        {
            id: 58,
            status: 1, 
            title: 'Cuộc Sống Bí Mật Của Các Nhà Văn',
            category: 'Tiểu thuyết',
            img: 'image/58.jpg',
            oldprice:140000,
            price: 120000,
            desc: 'Nathan Fawles là một nhà văn nổi tiếng, đã tuyên bố ngừng viết và đến ẩn mình trên đảo Beaumont nơi người dân sống tách biệt với phần còn lại của thế giới. Khát khao gặp gỡ thần tượng đời mình, Raphaël, một nhà văn tập sự, đã một ngày kia cập bến đảo, cùng thời điểm với Mathilde, một nữ phóng viên trẻ tuổi có phần bí ẩn. Giữa ba con người tưởng chừng xa lạ ấy liệu có tồn tại mối dây liên kết nào? Cái xác người phụ nữ bị tra tấn dã man và gắn trên cây cổ thụ của đảo thuộc về ai?'
        },
        {
            id: 59,
            status: 1, 
            title: 'Mùa Xa Nhà',
            img: 'image/59.jpg',
            category: 'Tiểu thuyết',
            oldprice:100000,
            price: 80000,
            desc: 'Mùa xa nhà là những trang viết chân thực nhất, sinh động nhất, thành tâm nhất của một người lính, một người từng có những năm tháng gắn bó và chiến đấu trên chiến trường Tây Bắc Campuchia (Quân tình nguyện Việt Nam sang giúp nước bạn Campuchia thoát khỏi chế độ diệt chủng Khmer Đỏ). Nơi đó đã gắn với không biết bao nhiêu kỉ niệm vui buồn của anh, của đồng chí, đồng đội anh, của kẻ thù và cả những con dân trên đất nước Campuchia. Là người lính trực tiếp tham gia chiến đấu trong những tháng ngày gian lao, nhọc nhằn nơi biên giới, lại là người có đời sống nội tâm phong phú nên điều gì xảy ra cũng để lại cho anh ấn tượng khó phai mờ. Nguyễn Thành Nhân may mắn và hạnh phúc hơn những người đồng đội, đồng chí của mình, anh còn sống trở về đất mẹ (08/1987).'
        },
        
        {
            id: 60,
            status: 1, 
            title:'Một Lít Nước Mắt', 
            img: 'image/60.jpg',
            category: 'Tiểu thuyết',
            oldprice:80000,
            price: 66000,
            desc: 'Căn bệnh Thoái hóa tiểu não phát triển khiến Aya phải ngồi xe lăn, không phát âm được như ý muốn, không thể cầm đũa và cuối cùng là nằm liệt giường. Aya kể lại cuộc chiến dai dẳng hàng năm trời với căn bệnh hiểm nghèo qua những dòng nhật ký đẫm nước mắt.'
        },
        {
            id: 61,
            status: 1, 
            title: 'Những Loài Hoa Có Gai',
            img: 'image/61.jpg',
            category: 'Tiểu thuyết',
            oldprice:120000,
            price: 96000,
            desc: 'Gai nhọn làm đau con người, nhưng lại không dễ bị phát hiện, chúng quá giống bạo lực trong xã hội hòa bình. Ba tháng vùi đầu viết lách, tôi thường không kiềm chế nổi bản thân mà hét lên rằng: “Thế giới này rốt cuộc làm sao vậy?” Đáng sợ hơn bạo lực học đường chính là sự tồn tại khắp nơi của bạo lực: bạo lực công sở, bạo lực lạnh hay lạm dụng tâm lý, bạo lực lời nói và bạo lực mà hiện nay mọi người đều biết – bạo lực mạng. Tôi cũng biết rằng, nếu vài bài viết không đủ khiến mọi người suy nghĩ nghiêm túc, hãy thông qua một cuốn tiểu thuyết, để chúng ta cùng nhau thảo luận, cùng nhau suy nghĩ, từ đó làm rung động và dấy lên càng nhiều hàng động càng tốt, để thay đổi thế giới của chúng ta. Nhất định những nỗ lực của chúng ta có thể khiến thế giới này trở nên tốt đẹp hơn.'
        },
        {
            id: 62,
            status: 1, 
            title: 'Hãy Chăm Sóc Mẹ',
            img: 'image/62.jpg',
            category: 'Tiểu thuyết',
            oldprice:100000,
            price: 84000,
            desc: 'Nội dung câu chuyện xoay quanh sự việc người mẹ Park So-nyo bị mất tích tại sân ga tàu Seoul trong một dịp lên thành phố cùng người chồng để tổ chức cùng các con nhân dịp sinh nhật của họ. Ngay tại sân ga ấy, người mẹ đã bị thất lạc và chính người chồng cũng đã không hề hay biết về sự mất tích này. Mãi đến khi tàu di chuyển và rời ga, ông mới bàng hoàng nhận ra bà vợ của mình đã không lên tàu.'
        },
        {
            id: 63,
            status: 1, 
            title: 'Cho Tôi Xin Một Vé Đi Tuổi Thơ', 
            img: 'image/63.jpg',
            category: 'Truyện ngắn',
            oldprice:100000,
            price: 76000,
            desc: 'Tác phẩm gồm những câu chuyện nhỏ xoay xung quanh bốn đứa trẻ trong cùng một khu xóm là con Tủn, con Tí sún, thằng Hải cò và thằng cu Mùi. Trong đó, người kể chuyện là cu Mùi dưới hình thức kể của "thằng cu Mùi" lúc bé và nhận xét, đánh giá của "ông Mùi" khi đã gần 50 tuổi. Song song đó còn có sự xuất hiện của các phụ huynh và những câu chuyện dở khóc dở cười khiến chúng như đang sống lại tuổi thơ tươi đẹp.'
        },
        {
            id: 64,
            status: 1, 
            title: 'Hai Số Phận',
            img: 'image/64.jpg',
            category: 'Tiểu thuyết',
            oldprice:230000,
            price: 211000,
            desc: 'Cuốn sách là một câu chuyện kể về hai người có số phận khác nhau. Họ không có điểm gì giống nhau cả ngoại trừ việc họ sinh ra vào cùng một thời điểm (18/04/1906) và có một lòng quyết tâm để đạt được thành công trong cuộc sống. William Lowell Kane là một người mạnh mẽ và giàu có trong khi đó Abel Rosnovski (tên ban đầu là Wladek Koskiewicz) là một người gốc Ba Lan phải đấu tranh từ lúc sinh ra và lớn lên cùng với những người nghèo khổ, cuối cùng di cư đến Hoa Kỳ.'
        },
        {
            id: 65,
            status: 1, 
            title: 'Về Nhà Với Mẹ', 
            img: 'image/65.jpg',
            category: 'Tiểu thuyết',
            oldprice:80000,
            price: 65000,
            desc: 'Vấp phải khó khăn tài chính ngoài ý muốn, Green phải dọn về sống chung với mẹ. Nhưng cô không về một mình mà còn dẫn theo một bạn gái khác, cũng là người yêu của mình trong suốt bảy năm qua. Ba người - hai thế hệ với tư tưởng và nhân sinh quan khác biệt sâu sắc liệu có thể chung sống yên bình dưới một mái nhà khi những nỗ lực tìm kiếm một mẫu số chung đôi lúc mang lại nhiều tổn thương hơn là hòa giải?'
        },
        
        {
            id: 66,
            status: 1, 
            title: 'Tôi Thấy Hoa Vàng Trên Cỏ Xanh',
            img: 'image/66.jpg',
            category: 'Tiểu thuyết',
            oldprice:160000,
            price: 140000,
            desc: 'Ta bắt gặp trong Tôi Thấy Hoa Vàng Trên Cỏ Xanh một thế giới đấy bất ngờ và thi vị non trẻ với những suy ngẫm giản dị thôi nhưng gần gũi đến lạ. Câu chuyện của Tôi Thấy Hoa Vàng Trên Cỏ Xanh có chút này chút kia, để ai soi vào cũng thấy mình trong đó, kiểu như lá thư tình đầu đời của cu Thiều chẳng hạn... ngây ngô và khờ khạo. Nhưng Tôi Thấy Hoa Vàng Trên Cỏ Xanh hình như không còn trong trẻo, thuần khiết trọn vẹn của một thế giới tuổi thơ nữa. Cuốn sách nhỏ nhắn vẫn hồn hậu, dí dỏm, ngọt ngào nhưng lại phảng phất nỗi buồn, về một người cha bệnh tật trốn nhà vì không muốn làm khổ vợ con, về một người cha khác giả làm vua bởi đứa con tâm thầm của ông luôn nghĩ mình là công chúa,... Những bài học về luân lý, về tình người trở đi trở lại trong day dứt và tiếc nuối. Tôi Thấy Hoa Vàng Trên Cỏ Xanh lắng đọng nhẹ nhàng trong tâm tưởng để rồi ai đã lỡ đọc rồi mà muốn quên đi thì thật khó.'
        },
        {
            id: 67,
            status: 1, 
            title: 'Trường Ca Achilles', 
            img: 'image/67.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 156000,
            desc: 'Huyền thoại bắt đầu từ khi Patroclus, một hoàng tử trẻ vụng về và yếu ớt bị trục xuất khỏi chính vương quốc của mình vì vô tình mắc phải một tội lỗi nghiêm trọng. Cậu được đưa tới vương quốc Phthia, nơi vua Peleus chấp nhận hết những đứa trẻ lầm lạc và rèn luyện chúng trở thành một đội quân tinh nhuệ.Chính tại đây, Patroclus đã làm thân được với cậu con trai hoàng kim của vương quốc này, Achilles, kẻ được tiên đoán trở thành ""Người Hy Lạp vĩ đại nhất"", mạnh mẽ, đẹp đẽ và mang một nửa dòng máu nữ thần.'
        },
        {
            id: 68,
            status: 1, 
            title: 'Hoàng Tử Bé',
            img: 'image/68.jpg',
            category: 'Tiểu thuyết',
            oldprice: 90000,
            price: 70000,
            desc: 'Tôi cứ sống cô độc như vậy, chẳng có một ai để chuyện trò thật sự, cho tới một lần gặp nạn ở sa mạc Sahara cách đây sáu năm. Có thứ gì đó bị vỡ trong động cơ máy bay. Và vì ở bên cạnh chẳng có thợ máy cũng như hành khách nào nên một mình tôi sẽ phải cố mà sửa cho bằng được vụ hỏng hóc nan giải này. Với tôi đó thật là một việc sống còn. Tôi chỉ có vừa đủ nước để uống trong tám ngày...'
        },
        {
            id: 69,
            status: 1, 
            title: 'Bao Điều Không Nói',
            img: 'image/69.jpg',
            category: 'Tiểu thuyết',
            oldprice:130000,
            price: 112000,
            desc: 'Lydia đã chết. Nhưng gia đình cô vẫn chưa biết điều này. Đó là mở đầu của cuốn tiểu thuyết về một gia đình lai Mỹ - Á sống tại thị trấn nhỏ ở Ohio năm 1970. Lydia là đứa con mà ông bà Lee rất mực yêu thương, và cô được kỳ vọng sẽ hoàn thành những giấc mơ dang dở của cha mẹ mình. Nhưng cuộc đời không phải luôn bằng phẳng. Cái chết của Lydia đã làm đảo lộn mọi dự định cũng như phá vỡ sự cân bằng mong manh của gia đình cô. Trong quá trình đi tìm manh mối về cái chết của Lydia, những bí mật của gia đình Lee dần được hé lộ…'
        },
        {
            id: 70,
            status: 1, 
            title: 'Đồi Gió Hú',
            img: 'image/70.jpg',
            category: 'Tiểu thuyết',
            oldprice:110000,
            price: 90000,
            desc: 'Tiểu thuyết bắt đầu bằng năm 1801, khi ông Lockwood tới sống tại trang trại Thrushcross, một căn nhà lớn vùng đồng cỏ hoang vắng xứ Yorkshire mà ông thuê từ người chủ đất Heathcliff, một người vốn sống trong một tòa nhà có tên Đồi gió hú. Lockwood qua đêm tại nhà của Heathcliff và trải qua một giấc mộng kinh hoàng khi hồn ma của Catherine Earnshaw cầu xin ông giúp nó vào nhà. Khi quay trở về Thrushcross, Lockwood đã đề nghị bà quản gia Ellen Dean kể lại câu chuyện của Heathcliff và Đồi gió hú.'
        },
        {
            id: 71,
            status: 1, 
            title: 'Xa Ngoài Kia Nơi Loài Tôm Hát',
            img: 'image/71.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 160000,
            desc: 'Năm 1952, tại một vùng đồng lầy ngập nước ở Vũng Barkley, cô bé 6 tuổi Catherine Danielle Clark (biệt danh "Kya") phải chứng kiến cảnh mẹ bỏ đi vì không thể chịu nổi cảnh Paul, người bố nghiện rượu suốt ngày bạo hành thể xác những thành viên trong gia đình. Trong thời gian tuyệt vọng chờ đợi mẹ trở về, các anh chị em của Kya là Missy, Murph, Mandy và Jodie cũng lần lượt bỏ nhà ra đi...'
        },
        {
            id: 72,
            status: 1, 
            title: 'For Whom The Bell Tolls',
            img: 'image/72.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 165000,
            desc: 'Chuông nguyện hồn ai là một bản hùng ca về cuộc đấu tranh anh dũng của nhân dân Tây Ban Nha chống lại bọn phát xít Franco bảo vệ chế độ cộng hòa, một cuộc chiến kéo dài từ năm 1936 tới năm 1939. Nhân vật chính là Robert Jordan, một chiến sĩ người Mỹ chiến đấu trong Lữ đoàn quốc tế, tham gia cuộc chiến tranh vĩ đại chống lại sự bành trướng toàn cầu của chủ nghĩa phát xít.'
        },
        {
            id: 73,
            status: 1, 
            title:'Kiêu Hãnh Và Định Kiến', 
            img: 'image/73.jpg',
            category: 'Tiểu thuyết',
            oldprice:180000,
            price: 150000,
            desc: 'Câu chuyện nói về tình yêu và hôn nhân của tầng lớp quý tộc nhỏ tại Anh vào đầu thế kỷ 19. Nhân vật chính là Elizabeth Bennet, một cô gái 20 tuổi xuất thân trong một gia đình trung lưu. Nội dung chính kể về sự đối đầu và sau này trở thành cuộc tình giữa Elizabeth và Fitzwilliam Darcy, thuộc tầng lớp địa chủ. Tựa truyện nói về sự kiêu hãnh và các định kiến của nhân vật này đối với nhân vật kia.'
        },
        {
            id: 74,
            status: 1, 
            title: 'Thời Niên Thiếu Không Thể Quay Lại Ấy',
            img: 'image/74.jpg',
            category: 'Self help',
            oldprice:270000,
            price: 245000,
            desc: 'Mặc dù chuyện quá khứ đã kết thúc nhưng thanh xuân không kết thúc! Trải qua thời gian học tiểu học cô độc, thời gian học cấp Hai hỗn loạn, La Kì Kì bước vào trường cấp Ba. Cũng giống như mọi người đã từng trải qua những năm tháng đó, phải đối mặt với cuộc thi vào trường đại học đầy cam go, tuy La Kì Kì không tình nguyện, nhưng cũng không thể không làm, cô học tập không tốt lắm, tính cách cô quật cường không chịu thua, kết quả như thế nào mới có thể là hoàn mĩ?'
        },
        {
            id: 75,
            status: 1, 
            title:'Tàn Ngày Để Lại',
            img: 'image/75.jpg',
            category: 'Tiểu thuyết',
            oldprice:170000,
            price: 143000,
            desc: 'Tàn ngày để lại kể về câu chuyện của Stevens, một quản gia người Anh đã dâng trọn đời mình để phục vụ cho Huân tước Darlington (gần đây ông ấy đã qua đời và càng được Stevens khắc họa chi tiết trong các đoạn hồi tưởng). Dần dần, dòng ký ức của tác phẩm rẽ nhánh thành hai phần chính: sự mến mộ ngây thơ của Huân tước Darlington đối với Đức Quốc xã, cùng với mối tình thầm kín mà Stevens dành cho bà Kenton, một nội quản khác cũng làm việc tại Dinh Darlington.'
        },
        {
            id: 76,
            status: 1, 
            title: 'The Hobbit',
            img: 'image/76.jpg',
            category: 'Tiểu thuyết',
            oldprice:300000,
            price: 250000,
            desc:'Truyện được chia thành 19 chương - qua mỗi chương, nhân vật Bilbo đạt được một cấp độ mới về sự trưởng thành, năng lực và trí tuệ. Câu chuyện đạt đến cao trào với Trận chiến 5 đạo quân, với sự tham gia của nhiều nhân vật và sinh vật từ các chương trước.'
        },
        ]
        localStorage.setItem('products', JSON.stringify(products));
    }
}

// Create admin 
function createAdminAccount() {
    let accounts = localStorage.getItem("accounts");
    if (!accounts) {
        accounts = [];
        accounts.push({
            fullname: "Nguyễn Huy Hoàng",
            phone: "0123456789",
            password: "88888888",
            address: '',
            email: '',
            status: 1,
            join: new Date(),
            cart: [],
            userType: 1
        })
        localStorage.setItem('accounts', JSON.stringify(accounts));
    }
   
}
createProduct();
createAdminAccount();


// Đổi sang định dạng tiền việt
function vnd(price) {
    if (price == null || isNaN(price)) {
        return 'Giá không hợp lệ';
    }

    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

//slideshow
let slideIndex = 1;
showSlides();
// Tự động chuyển slide 
setInterval(function() {
    plusSlides(1);
}, 5000);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
}

//countdown
let endDate = new Date("12/10/2023 00:00:00").getTime();
let check = setInterval(function(){
    let now = new Date().getTime();
    let distance = endDate - now;
    let day = Math.floor(distance / (24*60*60*1000));
    let hour = Math.floor((distance % (24*60*60*1000)) / (60* 60*1000));
    let minute = Math.floor((distance % (60* 60*1000)) / (60*1000));
    let seconds = Math.floor((distance % (60*1000)) / 1000);

    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('seconds').innerText = seconds;
    if(distance <= 0){
        clearInterval(check);
        document.querySelector('.body-countdown').style.display = 'none';
    }
}, 1000);

// Close popup 
const body = document.querySelector("body");
let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');
let formLogSign = document.querySelector('.forms');

// Click vùng ngoài sẽ tắt Popup
modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}
//Nút tăng giảm
function increasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (parseInt(qty.value) < qty.max) {
        qty.value = parseInt(qty.value) + 1;
    } else {
        qty.value = qty.max;
    }
}

function decreasingNumber(e) {
    let qty = e.parentNode.querySelector('.input-qty');
    if (qty.value > qty.min) {
        qty.value = parseInt(qty.value) - 1;
    } else {
        qty.value = qty.min;
    }
}

//Xem chi tiet san pham
function detailProduct(index) {
    let modal = document.querySelector('.modal.product-detail');
    let products = JSON.parse(localStorage.getItem('products'));
    event.preventDefault();
    let infoProduct = products.find(sp => {
        return sp.id === index;
    })
    let modalHtml = `<div class="modal-grid">
    <button class="modal-close" onclick="closeModal()"><i class="fa fa-times"></i></button>
    <div class="modal-header">
        <img class="product-image" src="${infoProduct.img}" alt="">
    </div>
    <div class="modal-body">
        <div class="product-info">
            <h2 class="product-title">${infoProduct.title}</h2>
            <div class="product-control">
                <div class="priceBox">
                    <span class="current-price">${vnd(infoProduct.price)}</span>
                </div>
                <div class="buttons_added">
                    <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                    <input class="input-qty" max="100" min="1" name="" type="number" value="1">
                    <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                </div>
            </div>
        </div>
    </div>
    <div class="descBox">
        <p class="product-description">${infoProduct.desc}</p>
    </div>
    <div class="notebox">
        <p class="notebox-title">Ghi chú</p>
        <textarea class="text-note" id="popup-detail-note" placeholder="Nhập thông tin cần lưu ý..."></textarea>
    </div>
    <div class="modal-footer">
        <div class="price-total">
            <span class="thanhtien">Thành tiền</span>
            <span class="price">${vnd(infoProduct.price)}</span>
        </div>
        <div class="modal-footer-control">
            <button class="button-dathangngay" data-product="${infoProduct.id}">Đặt ngay</button>
            <button class="button-dat" id="add-cart" onclick="animationCart()">Thêm vào giỏ</button>
        </div>
    </div>
</div>`;
    document.querySelector('#product-detail-content').innerHTML = modalHtml;
    modal.classList.add('open');
    body.style.overflow = "hidden";
    //Cap nhat gia tien khi tang so luong san pham
    let tgbtn = document.querySelectorAll('.is-form');
    let qty = document.querySelector('.product-control .input-qty');
    let priceText = document.querySelector('.price');
    // Hàm cập nhật tổng giá tiền
function updateTotalPrice() {
    let enteredQty = parseInt(qty.value);

    if (isNaN(enteredQty) || enteredQty <= 0) {
        qty.value = ''; 
        enteredQty = 1; 
    }

    let price = infoProduct.price * parseInt(qty.value);
    priceText.innerHTML = vnd(price);
}
    tgbtn.forEach(element => {
      element.addEventListener('click', () => {
        updateTotalPrice();
    });
    });
    qty.addEventListener('input', () => {
       updateTotalPrice();

    });
    // Them san pham vao gio hang
    let productbtn = document.querySelector('.button-dat');
    productbtn.addEventListener('click', (e) => {
        if (localStorage.getItem('currentuser')) {
            addCart(infoProduct.id);
        } else {
            toast({ title: 'Thất bại', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 2000 });
        }

    })
    // Mua ngay san pham
    dathangngay();
}

function animationCart(){
    document.querySelector(".count-product-cart").style.animation = "slidein ease 2s";
    setTimeout(()=>{
    document.querySelector(".count-product-cart").style.animation = "none";
},2000)
}


// Them SP vao gio hang
function addCart(index) {
    let currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : [];
    let soluong = document.querySelector('.input-qty').value;
    let popupDetailNote = document.querySelector('#popup-detail-note').value;
    let note = popupDetailNote == "" ? "Không có ghi chú" : popupDetailNote;
    let productcart = {
        id: index,
        soluong: parseInt(soluong),
        note: note
    }
    let vitri = currentuser.cart.findIndex(item => item.id == productcart.id);
    if (vitri == -1) {
        currentuser.cart.push(productcart);
    } else {
        currentuser.cart[vitri].soluong = parseInt(currentuser.cart[vitri].soluong) + parseInt(productcart.soluong);
    }
    localStorage.setItem('currentuser', JSON.stringify(currentuser));
    updateAmount();
    closeModal();
     toast({ title: 'Thành công', message: 'Thêm thành công sản phẩm vào giỏ hàng', type: 'success', duration: 2000 });
}
//CART
//Show gio hang
function showCart() {
    if (localStorage.getItem('currentuser') != null) {
        let currentuser = JSON.parse(localStorage.getItem('currentuser'));
        if (currentuser.cart.length != 0) {
            document.querySelector('.gio-hang-trong').style.display = 'none';
            document.querySelector('button.thanh-toan').classList.remove('disabled');
            let productcarthtml = '';
            currentuser.cart.forEach(item => {
                let product = getProduct(item);
                productcarthtml += `<li class="cart-item" data-id="${product.id}">
                <div class="cart-item-info">
                    <p class="cart-item-title">
                        ${product.title}
                    </p>
                    <span class="cart-item-price price" data-price="${product.price}">
                    ${vnd(parseInt(product.price))}
                    </span>
                </div>
                <p class="product-note"><i class="fa fa-pencil"></i><span>${product.note}</span></p>
                <div class="cart-item-control">
                    <button class="cart-item-delete" onclick="deleteCartItem(${product.id},this)">Xóa</button>
                    <div class="buttons_added">
                        <input class="minus is-form" type="button" value="-" onclick="decreasingNumber(this)">
                        <input class="input-qty" max="100" min="1" name="" type="number" value="${product.soluong}">
                        <input class="plus is-form" type="button" value="+" onclick="increasingNumber(this)">
                    </div>
                </div>
            </li>`
            });
            document.querySelector('.cart-list').innerHTML = productcarthtml;
            updateCartTotal();
            saveAmountCart();
        } else {
            document.querySelector('.gio-hang-trong').style.display = 'flex'
        }
    }
    let modalCart = document.querySelector('.modal-cart');
    let containerCart = document.querySelector('.cart-container');
    let themsach = document.querySelector('.them-sach');
    modalCart.onclick = function () {
        closeCart();
    }
    themsach.onclick = function () {
        closeCart();
    }
    containerCart.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}
// Delete cart item
function deleteCartItem(id, el) {
    let cartParent = el.parentNode.parentNode;
    cartParent.remove();
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let vitri = currentUser.cart.findIndex(item => item.id = id)
    currentUser.cart.splice(vitri, 1);

    // Nếu trống thì hiện giỏ hàng trống
    if (currentUser.cart.length == 0) {
        document.querySelector('.gio-hang-trong').style.display = 'flex';
        document.querySelector('button.thanh-toan').classList.add('disabled');
    }
    localStorage.setItem('currentuser', JSON.stringify(currentUser));
    updateCartTotal();
}

//Update cart total
function updateCartTotal() {
    document.querySelector('.text-price').innerText = vnd(getCartTotal());
}

// Lay tong tien don hang
function getCartTotal() {
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let tongtien = 0;
    if (currentUser != null) {
        currentUser.cart.forEach(item => {
            let product = getProduct(item);
            tongtien += (parseInt(product.soluong) * parseInt(product.price));
        });
    }
    return tongtien;
}

// Get Product 
function getProduct(item) {
    let products = JSON.parse(localStorage.getItem('products'));
    let infoProductCart = products.find(sp => item.id == sp.id)
    let product = {
        ...infoProductCart,
        ...item
    }
    return product;
}

updateAmount();
updateCartTotal();

// Lay so luong hang

function getAmountCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'))
    let amount = 0;
    currentuser.cart.forEach(element => {
        amount += parseInt(element.soluong);
    });
    return amount;
}

//Update Amount Cart 
function updateAmount() {
    if (localStorage.getItem('currentuser') != null) {
        let amount = getAmountCart();
        document.querySelector('.count-product-cart').innerText = amount;
    }
}

// Save Cart Info
function saveAmountCart() {
    let cartAmountbtn = document.querySelectorAll(".cart-item-control .is-form");
    let listProduct = document.querySelectorAll('.cart-item');
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    cartAmountbtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let id = listProduct[parseInt(index / 2)].getAttribute("data-id");
            let productId = currentUser.cart.find(item => {
                return item.id == id;
            });
            productId.soluong = parseInt(listProduct[parseInt(index / 2)].querySelector(".input-qty").value);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            updateCartTotal();
        })
    });
}

// Open & Close Cart
function openCart() {
    showCart();
    document.querySelector('.modal-cart').classList.add('open');
    body.style.overflow = "hidden";
}

function closeCart() {
    document.querySelector('.modal-cart').classList.remove('open');
    body.style.overflow = "auto";
    updateAmount();
}
//SEARCH

// Open Search Advanced
document.querySelector(".filter-btn").addEventListener("click",(e) => {
    e.preventDefault();
    document.querySelector(".advanced-search").classList.toggle("open");
    document.getElementById("home-service").scrollIntoView();
})

document.querySelector(".form-search-input").addEventListener("click",(e) => {
    e.preventDefault();
    document.getElementById("home-service").scrollIntoView();
})

function closeSearchAdvanced() {
    document.querySelector(".advanced-search").classList.toggle("open");
}

//menu search
function showMenuMobile() {
    var menuList = document.getElementById("menu-list");
    menuList.style.display = (menuList.style.display === 'none' || menuList.style.display === '') ? 'block' : 'none';
    var menuLinks = document.getElementsByClassName("menu-link");
    for (var i = 0; i < menuLinks.length; i++) {
        menuLinks[i].style.display = menuList.style.display;
    }
}


//Signup && Login Form

// Chuyen doi qua lai SignUp & Login 
// Lấy các phần tử DOM cho việc xử lý đăng nhập và đăng ký
let signup = document.querySelector('.signup-link');
let login = document.querySelector('.login-link');
let container = document.querySelector('.signup-login .modal-container');

// Xử lý sự kiện khi nhấp vào "Đăng nhập": Hiển thị modal đăng nhập
login.addEventListener('click', () => {
    container.classList.add('active');
});

// Xử lý sự kiện khi nhấp vào "Đăng ký": Ẩn modal đăng nhập
signup.addEventListener('click', () => {
    container.classList.remove('active');
});

// Lấy các phần tử DOM và xử lý sự kiện cho nút "Đăng ký" trong modal
let signupbtn = document.getElementById('signup');
let loginbtn = document.getElementById('login');
let formsg = document.querySelector('.modal.signup-login');

signupbtn.addEventListener('click', () => {
    formsg.classList.add('open'); 
    container.classList.remove('active');
});

loginbtn.addEventListener('click', () => {
    formsg.classList.add('open');
    container.classList.add('active');
});

function togglePassword(id, iconId) {
    var passwordInput = document.getElementById(id);
    var eyeIcon = document.getElementById(iconId);

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Chức năng đăng ký
let signupButton = document.getElementById('signup-button');
let loginButton = document.getElementById('login-button');
signupButton.addEventListener('click', () => {
    event.preventDefault();
    let fullNameUser = document.getElementById('fullname').value;
    let phoneUser = document.getElementById('phone').value;
    let passwordUser = document.getElementById('password').value;
    let passwordConfirmation = document.getElementById('password_confirmation').value;
    let checkSignup = document.getElementById('checkbox-signup').checked;
    // Check validate
    if (fullNameUser.length == 0) {
        document.querySelector('.form-message-name').innerHTML = '! Vui lòng nhập họ và tên';
        document.getElementById('fullname').focus();
    } else {
        document.querySelector('.form-message-name').innerHTML = '';
    }
    if (phoneUser.length == 0) {
        document.querySelector('.form-message-phone').innerHTML = '! Vui lòng nhập vào số điện thoại';
        document.getElementById('phone').focus();
    } else if (!/^\d+$/.test(phoneUser)) {
        document.querySelector('.form-message-phone').innerHTML = '! Vui lòng chỉ nhập số điện thoại';
        document.getElementById('phone').focus();
        document.getElementById('phone').value = '';
    } else if (phoneUser.length != 10) {
        document.querySelector('.form-message-phone').innerHTML = '! Vui lòng nhập vào số điện thoại 10 số';
        document.getElementById('phone').focus();
        document.getElementById('phone').value = '';
    } else {
        document.querySelector('.form-message-phone').innerHTML = '';
    }
    if (passwordUser.length == 0) {
        document.querySelector('.form-message-password').innerHTML = '! Vui lòng nhập mật khẩu';
        document.getElementById('password').focus();
    } else if (passwordUser.length < 8) {
        document.querySelector('.form-message-password').innerHTML = '! Vui lòng nhập mật khẩu lớn hơn 8 kí tự';
        document.getElementById('password').focus();
        document.getElementById('password').value = '';
    } else {
        document.querySelector('.form-message-password').innerHTML = '';
    }
    if (passwordConfirmation.length == 0) {
        document.querySelector('.form-message-password-confi').innerHTML = '! Vui lòng nhập lại mật khẩu';
        document.getElementById('password_confirmation').focus();
    } else if (passwordConfirmation !== passwordUser) {
        document.querySelector('.form-message-password-confi').innerHTML = '! Mật khẩu không khớp';
         document.getElementById('password_confirmation').focus();
        document.getElementById('password_confirmation').value = '';
    } else {
        document.querySelector('.form-message-password-confi').innerHTML = '';
    }
    if (checkSignup != true) {
        document.querySelector('.form-message-checkbox').innerHTML = '! Vui lòng check đăng ký';
    } else {
        document.querySelector('.form-message-checkbox').innerHTML = '';
    }

    if (fullNameUser && /^\d+$/.test(phoneUser) && phoneUser.length == 10 && passwordUser.length >= 8 && passwordConfirmation && checkSignup)  {
        if (passwordConfirmation == passwordUser) {
            let user = {
                fullname: fullNameUser,
                phone: phoneUser,
                password: passwordUser,
                address: '',
                email: '',
                status: 1,
                join: new Date(),
                cart: [],
                userType: 0
            }
            let accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
            let checkloop = accounts.some(account => {
                return account.phone == user.phone;
            })
            if (!checkloop) {
                accounts.push(user);
                localStorage.setItem('accounts', JSON.stringify(accounts));
                localStorage.setItem('currentuser', JSON.stringify(user));
                toast({ title: 'Thành công', message: 'Tạo thành công tài khoản !', type: 'success', duration: 2000 });
                closeModal();
                kiemtradangnhap();
                updateAmount();
            } else {
                toast({ title: 'Thất bại', message: 'Tài khoản đã tồn tại !',type: 'warning', duration: 2000 });
            }
        }
    }
}
)

// Dang nhap
loginButton.addEventListener('click', () => {
    event.preventDefault();
    let phonelog = document.getElementById('phone-login').value;
    let passlog = document.getElementById('password-login').value;
    let accounts = JSON.parse(localStorage.getItem('accounts'));

    if (phonelog.length == 0) {
        document.querySelector('.form-message.phonelog').innerHTML = '! Vui lòng nhập vào số điện thoại';
        document.getElementById('phone-login').focus();
    } else if (phonelog.length != 10) {
        document.querySelector('.form-message.phonelog').innerHTML = '! Vui lòng nhập vào số điện thoại 10 số';
        document.getElementById('phone-login').focus();
        document.getElementById('phone-login').value = '';
    } else {
        document.querySelector('.form-message.phonelog').innerHTML = '';
    }

    if (passlog.length == 0) {
        document.querySelector('.form-message-check-login').innerHTML = '! Vui lòng nhập mật khẩu';
        document.getElementById('password-login').focus();
    } else if (passlog.length < 8) {
        document.querySelector('.form-message-check-login').innerHTML = '! Vui lòng nhập mật khẩu lớn hơn 8 kí tự';
        document.getElementById('password-login').focus();
        document.getElementById('password-login').value = '';
    } else {
        document.querySelector('.form-message-check-login').innerHTML = '';
    }

    if (phonelog && passlog) {
        let vitri = accounts.findIndex(item => item.phone == phonelog);
        if (vitri == -1) {
            toast({ title: 'Thất bại', message: 'Tài khoản của bạn không tồn tại',type: 'warning', duration: 2000 });
        } else if (accounts[vitri].password == passlog) {
            if(accounts[vitri].status == 0) {
                toast({ title: 'Thất bại', message: 'Tài khoản của bạn đã bị khóa', type: 'warning', duration: 2000 });
            } else {
                localStorage.setItem('currentuser', JSON.stringify(accounts[vitri]));
                toast({ title: 'Thành công', message: 'Đăng nhập thành công', type: 'success', duration: 2000 });
                closeModal();
                kiemtradangnhap();
                checkAdmin();
                updateAmount();
            }
        } else {
            toast({ title: 'Thất bại', message: 'Sai mật khẩu', type: 'warning', duration: 2000 });
        }
    }
})

// Kiểm tra xem có tài khoản đăng nhập không ?
function kiemtradangnhap() {
    let currentUser = localStorage.getItem('currentuser');
    if (currentUser != null) {
        let user = JSON.parse(currentUser);
        document.querySelector('.auth-container').innerHTML = `<span class="text-dndk">Tài khoản</span>
            <span class="text-tk">${user.fullname} <i class="fa fa-caret-down"></span>`
        document.querySelector('.header-top-right-menu').innerHTML = `<li><a href="javascript:;" onclick="myAccount()"><i class="fa fa-user-circle"></i> Tài khoản của tôi</a></li>
            <li><a href="javascript:;" onclick="orderHistory()"><i class="fa fa-check-circle"></i> Đơn hàng đã mua</a></li>
            <li class="border"><a id="logout" href="javascript:;"><i class="fa fa-sign-out"></i> Đăng xuất</a></li>`
        document.querySelector('#logout').addEventListener('click',logOut)
    }
}

function logOut() {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    user = JSON.parse(localStorage.getItem('currentuser'));
    let vitri = accounts.findIndex(item => item.phone == user.phone)
    accounts[vitri].cart.length = 0;
    for (let i = 0; i < user.cart.length; i++) {
        accounts[vitri].cart[i] = user.cart[i];
    }
    localStorage.setItem('accounts', JSON.stringify(accounts));
    localStorage.removeItem('currentuser');
    window.location.href = "index.html";
}

function checkAdmin() {
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if(user && user.userType == 1) {
        let node = document.createElement(`li`);
        node.innerHTML = `<a href="./admin.html"><i class="fa fa-gear"></i> Quản lý cửa hàng</a>`
        document.querySelector('.header-top-right-menu').prepend(node);
    } 
}

kiemtradangnhap();
checkAdmin();

// Chuyển đổi trang chủ và trang thông tin tài khoản
function myAccount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('trangchu').classList.add('hide');
    document.getElementById('order-history').classList.remove('open');
    document.getElementById('account-user').classList.add('open');
    userInfo();
}

// Chuyển đổi trang chủ và trang xem lịch sử đặt hàng 
function orderHistory() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.getElementById('account-user').classList.remove('open');
    document.getElementById('trangchu').classList.add('hide');
    document.getElementById('order-history').classList.add('open');
    renderOrderProduct();
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function userInfo() {
    let user = JSON.parse(localStorage.getItem('currentuser'));
    document.getElementById('infoname').value = user.fullname;
    document.getElementById('infophone').value = user.phone;
    document.getElementById('infoemail').value = user.email;
    document.getElementById('infoaddress').value = user.address;
    if (user.email == undefined) {
        infoemail.value = '';
    }
    if (user.address == undefined) {
        infoaddress.value = '';
    }
}

// Thay doi thong tin
function changeInformation() {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let user = JSON.parse(localStorage.getItem('currentuser'));
    let infoname = document.getElementById('infoname');
    let infoemail = document.getElementById('infoemail');
    let infoaddress = document.getElementById('infoaddress');

    user.fullname = infoname.value;
    if (infoemail.value.length > 0) {
        if (!emailIsValid(infoemail.value)) {
            document.querySelector('.inforemail-error').innerHTML = 'Vui lòng nhập lại email!';
            infoemail.value = '';
        } else {
            user.email = infoemail.value;
        }
    }

    if (infoaddress.value.length > 0) {
        user.address = infoaddress.value;
    }

    let vitri = accounts.findIndex(item => item.phone == user.phone)

    accounts[vitri].fullname = user.fullname;
    accounts[vitri].email = user.email;
    accounts[vitri].address = user.address;
    localStorage.setItem('currentuser', JSON.stringify(user));
    localStorage.setItem('accounts', JSON.stringify(accounts));
    kiemtradangnhap();
    toast({ title: 'Thành công', message: 'Cập nhật thông tin thành công !', type: 'success', duration: 2000 });
}

// Đổi mật khẩu 
function changePassword() {
    let currentUser = JSON.parse(localStorage.getItem("currentuser"));
    let passwordCur = document.getElementById('password-cur-info');
    let passwordAfter = document.getElementById('password-after-info');
    let passwordConfirm = document.getElementById('password-comfirm-info');
    let check = true;
    if (passwordCur.value.length == 0) {
        document.querySelector('.password-cur-info-error').innerHTML = 'Vui lòng nhập mật khẩu hiện tại';
        check = false;
    } else {
        document.querySelector('.password-cur-info-error').innerHTML = '';
    }

    if (passwordAfter.value.length == 0) {
        document.querySelector('.password-after-info-error').innerHTML = 'Vui lòn nhập mật khẩu mới';
        check = false;
    } else {
        document.querySelector('.password-after-info-error').innerHTML = '';
    }

    if (passwordConfirm.value.length == 0) {
        document.querySelector('.password-after-comfirm-error').innerHTML = 'Vui lòng nhập mật khẩu xác nhận';
        check = false;
    } else {
        document.querySelector('.password-after-comfirm-error').innerHTML = '';
    }

    if (check == true) {
        if (passwordCur.value.length > 0) {
            if (passwordCur.value == currentUser.password) {
                document.querySelector('.password-cur-info-error').innerHTML = '';
                if (passwordAfter.value.length > 0) {
                    if (passwordAfter.value.length < 8) {
                        document.querySelector('.password-after-info-error').innerHTML = 'Vui lòng nhập mật khẩu mới có số  kí tự lớn hơn bằng 8';
                    } else {
                        document.querySelector('.password-after-info-error').innerHTML = '';
                        if (passwordConfirm.value.length > 0) {
                            if (passwordConfirm.value == passwordAfter.value) {
                                document.querySelector('.password-after-comfirm-error').innerHTML = '';
                                currentUser.password = passwordAfter.value;
                                localStorage.setItem('currentuser', JSON.stringify(currentUser));
                                let userChange = JSON.parse(localStorage.getItem('currentuser'));
                                let accounts = JSON.parse(localStorage.getItem('accounts'));
                                let accountChange = accounts.find(acc => {
                                    return acc.phone = userChange.phone;
                                })
                                accountChange.password = userChange.password;
                                localStorage.setItem('accounts', JSON.stringify(accounts));
                                toast({ title: 'Thành công', message: 'Đổi mật khẩu thành công !', type: 'success', duration: 2000 });
                            } else {
                                document.querySelector('.password-after-comfirm-error').innerHTML = 'Mật khẩu bạn nhập không trùng khớp';
                            }
                        } else {
                            document.querySelector('.password-after-comfirm-error').innerHTML = 'Vui lòng xác nhận mật khẩu';
                        }
                    }
                } else {
                    document.querySelector('.password-after-info-error').innerHTML = 'Vui lòng nhập mật khẩu mới';
                }
            } else {
                document.querySelector('.password-cur-info-error').innerHTML = 'Bạn đã nhập sai mật khẩu hiện tại';
            }
        }
    }
}

function getProductInfo(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(item => {
        return item.id == id;
    })
}

// Quan ly don hang
function renderOrderProduct() {
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    let order = localStorage.getItem('order') ? JSON.parse(localStorage.getItem('order')) : [];
    let orderHtml = "";
    let arrDonHang = [];
    for (let i = 0; i < order.length; i++) {
        if (order[i].khachhang === currentUser.phone) {
            arrDonHang.push(order[i]);
        }
    }
    if (arrDonHang.length == 0) {
        orderHtml = `<div class="empty-order-section"><p>Chưa có đơn hàng nào</p></div>`;
    } else {
        arrDonHang.forEach(item => {
            let productHtml = `<div class="order-history-group">`;
            let chiTietDon = getOrderDetails(item.id);
            chiTietDon.forEach(sp => {
                let infosp = getProductInfo(sp.id);
                productHtml += `<div class="order-history">
                    <div class="order-history-left">
                        <img src="${infosp.img}" alt="">
                        <div class="order-history-info">
                            <h4>${infosp.title}!</h4>
                            <p class="order-history-note"><i class="fa fa-pen"></i> ${sp.note}</p>
                            <p class="order-history-quantity">x${sp.soluong}</p>
                        </div>
                    </div>
                    <div class="order-history-right">
                        <div class="order-history-price">
                            <span class="order-history-current-price">${vnd(sp.price)}</span>
                        </div>                         
                    </div>
                </div>`;
            });
            let textCompl = item.trangthai == 1 ? "Đã xử lý" : "Đang xử lý";
            let classCompl = item.trangthai == 1 ? "complete" : "no-complete"
            productHtml += `<div class="order-history-control">
                <div class="order-history-status">
                    <span class="order-history-status-sp ${classCompl}">${textCompl}</span>
                    <button id="order-history-detail" onclick="detailOrder('${item.id}')"> Xem chi tiết</button>
                </div>
                <div class="order-history-total">
                    <span class="order-history-total-desc">Tổng tiền: </span>
                    <span class="order-history-toltal-price">${vnd(item.tongtien)}</span>
                </div>
            </div>`
            productHtml += `</div>`;
            orderHtml += productHtml;
        });
    }
    document.querySelector(".order-history-section").innerHTML = orderHtml;
}

// Get Order Details
function getOrderDetails(madon) {
    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : [];
    let ctDon = [];
    orderDetails.forEach(item => {
        if(item.madon == madon) {
            ctDon.push(item);
        }
    });
    return ctDon;
}

// Format Date
function formatDate(date) {
    let fm = new Date(date);
    let Year = fm.getFullYear();
    let Month= fm.getMonth() + 1;
    let Day = fm.getDate();
    if (Day < 10) Day = '0' + Day;
    if (Month< 10) Month= '0' + Month;
    return Day + '/' + Month+ '/' + Year;
}

// Xem chi tiet don hang
function detailOrder(id) {
    let order = JSON.parse(localStorage.getItem("order"));
    let detail = order.find(item => {
        return item.id == id;
    })
    document.querySelector(".modal.detail-order").classList.add("open");
    let detailOrderHtml = `<ul class="detail-order-group">
        <li class="detail-order-item">
            <span class="detail-order-item-left"> Ngày đặt hàng</span>
            <span class="detail-order-item-right">${formatDate(detail.thoigiandat)}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"></i> Hình thức giao</span>
            <span class="detail-order-item-right">${detail.hinhthucgiao}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"></i> Ngày nhận hàng</span>
            <span class="detail-order-item-right">${(detail.thoigiangiao == "" ? "" : (detail.thoigiangiao + " - ")) + formatDate(detail.ngaygiaohang)}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"></i> Địa điểm nhận</span>
            <span class="detail-order-item-right">${detail.diachinhan}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"></i> Người nhận</span>
            <span class="detail-order-item-right">${detail.tenguoinhan}</span>
        </li>
        <li class="detail-order-item">
            <span class="detail-order-item-left"></i> Số điện thoại nhận</span>
            <span class="detail-order-item-right">${detail.sdtnhan}</span>
        </li>
    </ul>`
    document.querySelector(".detail-order-content").innerHTML = detailOrderHtml;
}

// Create id order 
function createId(arr) {
    let id = arr.length + 1;
    let check = arr.find(item => item.id == "DH" + id)
    while (check != null) {
        id++;
        check = arr.find(item => item.id == "DH" + id)
    }
    return "DH" + id;
}

// Back to top
window.onscroll = () => {
    let backtopTop = document.querySelector(".back-to-top")
    if (document.documentElement.scrollTop > 1000) {
        backtopTop.classList.add("active");
    } else {
        backtopTop.classList.remove("active");
    }
}

// Page
function renderProducts(showProduct) {
    let productHtml = '';
    if(showProduct.length == 0) {
        document.getElementById("home-title").style.display = "none";
        productHtml = `<div class="no-result"><div class="no-result-h">Tìm kiếm không có kết quả</div><div class="no-result-p">Xin lỗi, chúng tôi không thể tìm được kết quả hợp với tìm kiếm của bạn</div><div class="no-result-i"><i class="fa fa-face-sad-cry"></i></div></div>`;
    } else {
        document.getElementById("home-title").style.display = "block";
        showProduct.forEach((product) => {
            productHtml += `<div class="col-product">
            <article class="card-product" >
                <div class="card-header">
                    <a href="#" class="card-image-link" onclick="detailProduct(${product.id})">
                    <img class="card-image" src="${product.img}" alt="${product.title}">
                    </a>
                </div>
                <div class="book-info">
                    <div class="card-content">
                        <div class="card-title">
                            <a href="#" class="card-title-link" onclick="detailProduct(${product.id})">${product.title}</a>
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="product-price">
                            <span class="old-price">${vnd(product.oldprice)}</span>
                            <span class="current-price">${vnd(product.price)}</span>
                        </div>
                </div>
                </div>
            </article>
        </div>`;
        });
    }
    document.getElementById('home-products').innerHTML = productHtml;
}

// Find Product
var productAll = JSON.parse(localStorage.getItem('products')).filter(item => item.status==1);
function searchProducts(mode) {
    let valeSearchInput = document.querySelector('.form-search-input').value;
    let valueCategory = document.getElementById("advanced-search-category-select").value;
    let minPrice = document.getElementById("min-price").value;
    let maxPrice = document.getElementById("max-price").value;
    if(parseInt(minPrice) > parseInt(maxPrice) && minPrice != "" && maxPrice != "") {
        toast({ title: 'Warning', message: 'Bạn đã nhập sai giá !', type: 'warning', duration: 3000 });
    }

    let result = valueCategory == "Tất cả" ? productAll : productAll.filter((item) => {
        return item.category == valueCategory;
    });

    result = valeSearchInput == "" ? result : result.filter(item => {
        return item.title.toString().toUpperCase().includes(valeSearchInput.toString().toUpperCase());
    })

    if(minPrice == "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice);
    } else if (minPrice != "" && maxPrice == "") {
        result = result.filter((item) => item.price >= minPrice);
    } else if(minPrice != "" && maxPrice != "") {
        result = result.filter((item) => item.price <= maxPrice && item.price >= minPrice);
    }

    document.getElementById("home-service").scrollIntoView();
    switch (mode){
        case 0:
            result = JSON.parse(localStorage.getItem('products'));;
            document.querySelector('.form-search-input').value = "";
            document.getElementById("advanced-search-category-select").value = "Tất cả";
            document.getElementById("min-price").value = "";
            document.getElementById("max-price").value = "";
            break;
        case 1:
            result.sort((a,b) => a.price - b.price)
            break;
        case 2:
            result.sort((a,b) => b.price - a.price)
            break;
    }
    showHomeProduct(result)
}

// Phân trang 
let perPage = 12;
let currentPage = 1;

function displayList(productAll, perPage, currentPage) {
    let start = (currentPage - 1) * perPage;
    let end = (currentPage - 1) * perPage + perPage;
    let productShow = productAll.slice(start, end);
    renderProducts(productShow);
}

function showHomeProduct(products=JSON.parse(localStorage.getItem('products'))) {
    let productAll = products
    displayList(productAll, perPage, currentPage);
    setupPagination(productAll, perPage, currentPage);
}

showHomeProduct(JSON.parse(localStorage.getItem('products')))

function setupPagination(productAll, perPage) {
    document.querySelector('.page-nav-list').innerHTML = '';
    let page_count = Math.ceil(productAll.length / perPage);
    if (page_count > 1) {
        for (let i = 1; i <= page_count; i++) {
            let li = paginationChange(i, productAll, currentPage);
            document.querySelector('.page-nav-list').appendChild(li);
        }
    }
}

function paginationChange(page, productAll, currentPage) {
    let node = document.createElement(`li`);
    node.classList.add('page-nav-item');
    node.innerHTML = `<a href="javascript:;">${page}</a>`;
    if (currentPage == page) node.classList.add('active');
    node.addEventListener('click', function () {
        currentPage = page;
        displayList(productAll, perPage, currentPage);
        let t = document.querySelectorAll('.page-nav-item.active');
        for (let i = 0; i < t.length; i++) {
            t[i].classList.remove('active');
        }
        node.classList.add('active');
        document.getElementById("home-service").scrollIntoView();
    })
    return node;
}

// Hiển thị chuyên mục
function showCategory(category) {
    document.getElementById('trangchu').classList.remove('hide');
    document.getElementById('account-user').classList.remove('open');
    document.getElementById('order-history').classList.remove('open');
    let productSearch = productAll.filter(value => {
        return value.category.toString().toUpperCase().includes(category.toUpperCase());
    })
    let currentPageSeach = 1;
    displayList(productSearch, perPage, currentPageSeach);
    setupPagination(productSearch, perPage, currentPageSeach);
    document.getElementById("home-title").scrollIntoView();
}
//Xử lý checkout
const PHIVANCHUYEN = 20000;
let priceFinal = document.getElementById("checkout-cart-price-final");
// Trang thanh toan
function thanhtoanpage(option,product) {
    // Xu ly ngay nhan hang
    let today = new Date();
    let ngaymai = new Date();
    let ngaykia = new Date();
    ngaymai.setDate(today.getDate() + 1);
    ngaykia.setDate(today.getDate() + 2);
    let dateorderhtml = `<a href="javascript:;" class="pick-date active" data-date="${today}">
        <span class="text">Hôm nay</span>
        <span class="date">${today.getDate()}/${today.getMonth() + 1}</span>
        </a>
        <a href="javascript:;" class="pick-date" data-date="${ngaymai}">
            <span class="text">Ngày mai</span>
            <span class="date">${ngaymai.getDate()}/${ngaymai.getMonth() + 1}</span>
        </a>

        <a href="javascript:;" class="pick-date" data-date="${ngaykia}">
            <span class="text">Ngày kia</span>
            <span class="date">${ngaykia.getDate()}/${ngaykia.getMonth() + 1}</span>
    </a>`
    document.querySelector('.date-order').innerHTML = dateorderhtml;
    let pickdate = document.getElementsByClassName('pick-date')
    for(let i = 0; i < pickdate.length; i++) {
        pickdate[i].onclick = function () {
            document.querySelector(".pick-date.active").classList.remove("active");
            this.classList.add('active');
        }
    }
    let totalBillOrder = document.querySelector('.total-bill-order');
    let totalBillOrderHtml;
    // Xu ly don hang
    switch (option) {
        case 1: // Truong hop thanh toan san pham trong gio
            // Hien thi don hang
            showProductCart();
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
            <div class="text">
                Tiền hàng 
                <span class="count">${getAmountCart()} món</span>
            </div>
            <div class="price-detail">
                <span id="checkout-cart-total">${vnd(getCartTotal())}</span>
            </div>
        </div>
        <div class="priceFlx chk-ship">
            <div class="text">Phí vận chuyển</div>
            <div class="price-detail chk-free-ship">
                <span>${vnd(PHIVANCHUYEN)}</span>
            </div>
        </div>`;
            // Tong tien
            priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
            break;
        case 2: // Truong hop mua ngay
            // Hien thi san pham
            showProductBuyNow(product);
            // Tinh tien
            totalBillOrderHtml = `<div class="priceFlx">
                <div class="text">
                    Tiền hàng 
                    <span class="count">${product.soluong} món</span>
                </div>
                <div class="price-detail">
                    <span id="checkout-cart-total">${vnd(product.soluong * product.price)}</span>
                </div>
            </div>
            <div class="priceFlx chk-ship">
                <div class="text">Phí vận chuyển</div>
                <div class="price-detail chk-free-ship">
                    <span>${vnd(PHIVANCHUYEN)}</span>
                </div>
            </div>`
            // Tong tien
            priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
            break;
    }

    // Tinh tien
    totalBillOrder.innerHTML = totalBillOrderHtml;

    // Xu ly hinh thuc giao hang
    let giaotannoi = document.querySelector('#giaotannoi');
    let tudenlay = document.querySelector('#tudenlay');
    let tudenlayGroup = document.querySelector('#tudenlay-group');
    let chkShip = document.querySelectorAll(".chk-ship");
    
    tudenlay.addEventListener('click', () => {
        giaotannoi.classList.remove("active");
        tudenlay.classList.add("active");
        chkShip.forEach(item => {
            item.style.display = "none";
        });
        tudenlayGroup.style.display = "block";
        switch (option) {
            case 1:
                priceFinal.innerText = vnd(getCartTotal());
                break;
            case 2:
                priceFinal.innerText = vnd((product.soluong * product.price));
                break;
        }
    })

    giaotannoi.addEventListener('click', () => {
        tudenlay.classList.remove("active");
        giaotannoi.classList.add("active");
        tudenlayGroup.style.display = "none";
        chkShip.forEach(item => {
            item.style.display = "flex";
        });
        switch (option) {
            case 1:
                priceFinal.innerText = vnd(getCartTotal() + PHIVANCHUYEN);
                break;
            case 2:
                priceFinal.innerText = vnd((product.soluong * product.price) + PHIVANCHUYEN);
                break;
        }
    })

    // Su kien khu nhan nut dat hang
    document.querySelector(".complete-checkout-btn").onclick = () => {
        switch (option) {
            case 1:
                xulyDathang();
                break;
            case 2:
                xulyDathang(product);
                break;
        }
    }
}

// Hien thi hang trong gio
function showProductCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'));
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = '';
    currentuser.cart.forEach(item => {
        let product = getProduct(item);
        listOrderHtml += `<div class="book-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-book">
            <div class="name-book">${product.title}</div>
        </div>
    </div>`
    })
    listOrder.innerHTML = listOrderHtml;
}

// Hien thi hang mua ngay
function showProductBuyNow(product) {
    let listOrder = document.getElementById("list-order-checkout");
    let listOrderHtml = `<div class="book-total">
        <div class="count">${product.soluong}x</div>
        <div class="info-book">
            <div class="name-book">${product.title}</div>
        </div>
    </div>`;
    listOrder.innerHTML = listOrderHtml;
}

//Open Page Checkout
let nutthanhtoan = document.querySelector('.thanh-toan')
let checkoutpage = document.querySelector('.checkout-page');
nutthanhtoan.addEventListener('click', () => {
    checkoutpage.classList.add('active');
    thanhtoanpage(1);
    closeCart();
    body.style.overflow = "hidden"
})

// Đặt hàng ngay
function dathangngay() {
    let productInfo = document.getElementById("product-detail-content");
    let datHangNgayBtn = productInfo.querySelector(".button-dathangngay");
    datHangNgayBtn.onclick = () => {
        if(localStorage.getItem('currentuser')) {
            let productId = datHangNgayBtn.getAttribute("data-product");
            let soluong = parseInt(productInfo.querySelector(".buttons_added .input-qty").value);
            let notevalue = productInfo.querySelector("#popup-detail-note").value;
            let ghichu = notevalue == "" ? "Không có ghi chú" : notevalue;
            let products = JSON.parse(localStorage.getItem('products'));
            let a = products.find(item => item.id == productId);
            a.soluong = parseInt(soluong);
            a.note = ghichu;
            checkoutpage.classList.add('active');
            thanhtoanpage(2,a);
            closeCart();
            body.style.overflow = "hidden"
        } else {
            toast({ title: 'Warning', message: 'Chưa đăng nhập tài khoản !', type: 'warning', duration: 3000 });
        }
    }
}

// Close Page Checkout
function closecheckout() {
    checkoutpage.classList.remove('active');
    body.style.overflow = "auto"
}

// Thong tin cac don hang da mua - Xu ly khi nhan nut dat hang
function xulyDathang(product) {
    let diachinhan = "";
    let hinhthucgiao = "";
    let thoigiangiao = "";
    let giaotannoi = document.querySelector("#giaotannoi");
    let tudenlay = document.querySelector("#tudenlay");
    let giaongay = document.querySelector("#giaongay");
    let giaovaogio = document.querySelector("#deliverytime");
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));
    // Hinh thuc giao & Dia chi nhan hang
    if(giaotannoi.classList.contains("active")) {
        diachinhan = document.querySelector("#diachinhan").value;
        hinhthucgiao = giaotannoi.innerText;
    }
    if(tudenlay.classList.contains("active")){
        let chinhanh1 = document.querySelector("#chinhanh-1");
        let chinhanh2 = document.querySelector("#chinhanh-2");
        if(chinhanh1.checked) {
            diachinhan = "273 An Dương Vương, Phường 3, Quận 5";
        }
        if(chinhanh2.checked) {
            diachinhan = "04 Tôn Đức Thắng, Phường Bến Nghé, Quận 1";
        }
        hinhthucgiao = tudenlay.innerText;
    }

    // Thoi gian nhan hang
    if(giaongay.checked) {
        thoigiangiao = "Giao ngay khi xong";
    }

    if(giaovaogio.checked) {
        thoigiangiao = document.querySelector(".choise-time").value;
    }

    let orderDetails = localStorage.getItem("orderDetails") ? JSON.parse(localStorage.getItem("orderDetails")) : [];
    let order = localStorage.getItem("order") ? JSON.parse(localStorage.getItem("order")) : [];
    let madon = createId(order);
    let tongtien = 0;
    if(product == undefined) {
        currentUser.cart.forEach(item => {
            item.madon = madon;
            item.price = getpriceProduct(item.id);
            tongtien += item.price * item.soluong;
            orderDetails.push(item);
        });
    } else {
        product.madon = madon;
        product.price = getpriceProduct(product.id);
        tongtien += product.price * product.soluong;
        orderDetails.push(product);
    }   
    let tennguoinhan = document.querySelector("#tennguoinhan").value;
    let sdtnhan = document.querySelector("#sdtnhan").value
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(sdtnhan)) {
        toast({ title: 'Chú ý', message: 'Số điện thoại phải có 10 số!', type: 'warning', duration: 2000 });
        document.getElementById('sdtnhan').focus();
        document.getElementById('sdtnhan').value = '';
        return;
    }
    if(tennguoinhan == "" || sdtnhan == "" || diachinhan == "") {
        toast({ title: 'Chú ý', message: 'Vui lòng nhập đầy đủ thông tin !', type: 'warning', duration: 4000 });
    } else {
        let donhang = {
            id: madon,
            khachhang: currentUser.phone,
            hinhthucgiao: hinhthucgiao,
            ngaygiaohang: document.querySelector(".pick-date.active").getAttribute("data-date"),
            thoigiangiao: thoigiangiao,
            ghichu: document.querySelector(".note-order").value,
            tenguoinhan: tennguoinhan,
            sdtnhan: sdtnhan,
            diachinhan: diachinhan,
            thoigiandat: new Date(),
            tongtien:tongtien,
            trangthai: 0
        }
    
        order.unshift(donhang);
        if(product == null) {
            currentUser.cart.length = 0;
        }
    
        localStorage.setItem("order",JSON.stringify(order));
        localStorage.setItem("currentuser",JSON.stringify(currentUser));
        localStorage.setItem("orderDetails",JSON.stringify(orderDetails));
        toast({ title: 'Thành công', message: 'Đặt hàng thành công !', type: 'success', duration: 1000 });
        setTimeout((e)=>{
            window.location.href = "index.html";
        },2000);  
    }
}

function getpriceProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    let sp = products.find(item => {
        return item.id == id;
    })
    return sp.price;
}
