import React from 'react';

interface svgPropsInterface {
	className?: string;
	stopColor?: string;
}

const RippedBotton: React.FC<svgPropsInterface> = ({ className }) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='2440px'
			height='173px'
			viewBox='0 0 1440 73'
			preserveAspectRatio='xMidYMid meet'
			className={`${className} bg-transparent`}
		>
			<title>Combined Shape Copy</title>
			<desc>Created with Sketch.</desc>
			<g id='Round-2' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
				<path
					d='M2.70375769,40.1852042 C3.03453656,40.1852042 3.36985701,40.1502897 3.71198984,40.0683163 C6.70489519,39.4019032 9.18308743,37.3943148 12.2925602,37.3943148 C12.5347781,37.3943148 12.7815376,37.406459 13.0320818,37.4322654 C18.1701297,38.1518094 22.2325786,41.1468732 26.8930031,43.0648982 C29.0532843,43.9377627 31.2355165,44.3020887 33.4071516,44.3020887 C38.6822041,44.3020887 43.9004867,42.15636 48.6403889,39.9491513 C51.6529744,42.0637605 55.7578115,44.3210641 59.5772856,44.3210641 C61.6701999,44.3210641 63.677581,43.6432658 65.3731066,41.8929827 C65.3345031,41.6834952 65.3360169,41.494501 65.4419873,41.3282773 C65.3254199,40.9730594 65.2429144,40.648961 65.4041407,40.3817885 C65.2890872,40.0584491 65.2179357,39.7556031 65.3299615,39.4982978 C65.1634367,39.026951 65.1149931,38.5844466 65.488917,38.2717334 C65.8272652,37.9590202 66.1656134,37.8330241 66.5024477,37.8330241 C67.7135373,37.8330241 68.9079745,39.4542751 70.0289894,39.8292273 C76.3622315,42.3453542 83.5318823,41.7457342 90.3427478,42.3453542 C90.4873217,42.3529443 90.6326524,42.3559804 90.7772263,42.3559804 C91.4925261,42.3559804 92.207069,42.275525 92.9178273,42.1950697 C93.6285855,42.1153734 94.3355591,42.034918 95.0357203,42.034918 C95.8327687,42.034918 96.619977,42.1389028 97.3935605,42.4645192 C101.143397,43.9969657 105.499535,45.6106265 109.616483,45.6106265 C112.582896,45.6106265 115.423658,44.7734356 117.826157,42.4645192 C120.266503,44.976092 123.431988,46 126.691334,46 C129.49652,46 132.370587,45.2417464 134.913119,44.0227721 C136.246074,44.6724869 137.622175,44.9092989 139.018712,44.9092989 C142.25535,44.9092989 145.601742,43.6387117 148.774797,43.3039871 C149.066972,43.2645185 149.359147,43.2470612 149.649809,43.2470612 C150.937349,43.2470612 152.210507,43.5908939 153.474582,43.9347266 C154.738656,44.2793184 155.994405,44.6231511 157.247126,44.6231511 C157.928364,44.6231511 158.608845,44.5214434 159.289326,44.2618611 C159.450552,44.1889959 159.607994,44.1571173 159.761651,44.1571173 C160.277878,44.1571173 160.747932,44.5176483 161.156675,44.8781793 C161.564661,45.2387103 161.910578,45.5992413 162.177018,45.5992413 C162.211837,45.5992413 162.244385,45.5931692 162.276176,45.580266 C170.880211,43.1840631 179.244299,43.5430761 187.967172,42.2254302 C190.595994,41.7457342 192.627597,39.9491513 195.017228,38.6307464 C195.615204,38.2717334 196.33126,37.9119614 197.048074,37.9119614 C205.272887,37.9119614 213.415194,39.3130987 221.679367,39.3130987 C223.380948,39.3130987 225.087828,39.2531367 226.802276,39.1104424 C228.714284,38.9897593 230.028317,36.9533285 231.940324,36.7134805 C232.773705,36.5745812 233.607843,36.5427026 234.441225,36.5427026 C234.781087,36.5427026 235.120949,36.5480157 235.460054,36.5533288 C235.798402,36.5586419 236.13675,36.563955 236.475098,36.563955 C237.113948,36.563955 237.753555,36.5457387 238.392405,36.4743915 C239.348409,36.3537085 240.184817,36.1146195 241.021226,35.6356825 C245.323622,32.7597837 247.832092,28.3256319 252.612111,26.768897 C253.190407,26.5457473 253.802007,26.5055196 254.421933,26.5055196 C254.598298,26.5055196 254.77542,26.5093147 254.952542,26.5123507 C255.130421,26.5153868 255.3083,26.5191818 255.486178,26.5191818 C256.179527,26.5191818 256.866064,26.468328 257.511726,26.170036 C258.825758,25.69034 259.781762,24.3719351 260.856604,23.2933782 C261.604452,22.5943275 262.476437,22.3529615 263.386268,22.3529615 C264.658669,22.3529615 266.005249,22.8250674 267.189846,23.1742132 C267.071008,20.0592253 269.818668,17.3032505 272.686679,17.3032505 C272.95539,17.3002144 273.223344,17.2986964 273.492054,17.2986964 C284.205656,17.2986964 294.702019,19.5856015 305.426975,19.8186183 C306.622169,19.8186183 307.338983,21.2569473 308.534177,21.3768713 C310.859469,21.6326585 313.201414,21.6751632 315.543358,21.6751632 C316.129223,21.6751632 316.715844,21.6728862 317.300952,21.6698501 C317.886817,21.6675731 318.472681,21.6645371 319.057032,21.6645371 C324.313161,21.6645371 329.517062,21.8800966 334.463607,24.2520111 C335.458214,24.7506824 336.572416,24.9578929 337.72825,24.9578929 C339.628904,24.9578929 341.642341,24.3985005 343.424913,23.6531501 C350.594564,20.5381623 357.286591,16.7036305 365.292651,15.3859846 C370.430699,14.4273516 375.209962,13.9476556 380.34801,13.1097057 C381.748332,12.9336148 383.084315,12.8227989 384.449819,12.8227989 C384.949393,12.8227989 385.451996,12.8372202 385.964438,12.8690987 C387.239867,12.9761195 388.420679,14.1252646 389.590895,14.1252646 C389.736225,14.1252646 389.881556,14.1078073 390.026887,14.0683387 C396.75449,12.586746 403.370824,10.9928195 409.988672,10.9928195 C413.009584,10.9928195 416.029739,11.324508 419.063519,12.1510727 C424.000223,10.78485 429.179145,7.3525949 434.341415,7.3525949 C436.42676,7.3525949 438.509077,7.91274622 440.571714,9.39509789 C442.005342,10.4728958 443.200536,12.1510727 444.992948,12.2702377 C448.099393,12.3901617 450.609377,14.3074276 453.476632,15.0262126 C453.540214,15.0391158 453.603796,15.0444289 453.667378,15.0444289 C454.147272,15.0444289 454.631708,14.7043912 455.150963,14.3635946 C455.670218,14.0220389 456.224291,13.6812422 456.844975,13.6812422 C457.067512,13.6812422 457.298376,13.7252649 457.539081,13.8284907 C458.85387,14.5472756 459.929469,15.6250736 461.363096,16.1047695 C467.576743,18.3810484 474.387609,18.5009724 480.00328,22.3355042 C481.457345,21.6068521 482.910652,20.5320902 484.521401,20.5320902 C485.030059,20.5320902 485.553098,20.639111 486.098089,20.8971753 C487.292526,21.4967953 488.368125,22.3355042 489.563319,22.9343652 C490.160538,23.1742132 490.757756,23.4140612 491.354975,23.4140612 C492.430574,23.2933782 493.386578,22.5753522 494.343339,22.5753522 C496.910849,22.6277241 499.525289,22.7954659 502.135187,22.7954659 C505.474767,22.7954659 508.807534,22.5207033 512.027519,21.3768713 C513.222713,23.8929981 516.089968,24.4926181 518.838384,24.4926181 C520.673942,24.4926181 521.738187,27.1423312 524.040771,27.1423312 C524.136901,27.1423312 524.235303,27.1377771 524.335217,27.12791 C526.5939,26.9222175 528.764778,26.0971708 530.999238,26.0971708 C531.364836,26.0971708 531.731948,26.1191822 532.102087,26.170036 C534.013338,26.289201 534.730908,28.5662389 536.284131,28.9260109 C539.277793,29.6432778 542.23588,29.8277179 545.196994,29.8277179 C547.673672,29.8277179 550.151865,29.6986857 552.655036,29.6447958 C554.446691,29.6447958 555.2831,27.8466949 556.717484,26.768897 C557.040694,26.531326 557.348008,26.4334134 557.646239,26.4334134 C558.998875,26.4334134 560.147139,28.4463149 561.616342,28.4463149 C567.351609,28.5662389 573.086875,29.0451759 578.942494,30.0045678 C581.332125,30.3635808 583.363728,31.3222138 585.753359,31.6812267 C586.112145,31.7411887 586.440653,31.7707902 586.769161,31.7707902 C587.097669,31.7707902 587.426934,31.7411887 587.784962,31.6812267 C592.564982,30.6034288 596.627431,28.5662389 601.406693,27.9673779 C602.666983,27.8292376 603.918947,27.7753477 605.164099,27.7753477 C607.443975,27.7753477 609.702658,27.9567518 611.956041,28.1381558 C614.208668,28.3195598 616.455996,28.5009638 618.713165,28.5009638 C619.395916,28.5009638 620.079425,28.4842655 620.764448,28.4463149 C621.469151,27.8869226 622.123896,27.6675679 622.750635,27.6675679 C624.674754,27.6675679 626.339245,29.7305643 628.411722,30.3635808 C628.600198,30.4174707 628.788674,30.4410001 628.975636,30.4410001 C629.619027,30.4410001 630.246523,30.1624425 630.80211,29.8838848 C632.526399,28.9108306 633.765495,27.0595988 635.746384,27.0595988 C635.961352,27.0595988 636.18389,27.0808512 636.417025,27.12791 C637.294308,27.253147 638.433489,27.609124 639.405389,27.609124 C639.917831,27.609124 640.383344,27.5104523 640.739101,27.2265816 C640.754997,27.1688966 640.775434,27.1112117 640.802683,27.0520087 C640.730775,26.7605479 640.710338,26.467569 640.846585,26.1609279 C640.776948,25.8717441 640.758781,25.5787652 640.888973,25.2728831 L640.894272,25.2614979 L640.894272,25.2614979 C640.829176,24.9829403 640.814037,24.6998286 640.924549,24.4030546 C640.925306,24.4000186 640.92682,24.3969825 640.928334,24.3939465 C640.861724,24.1138708 640.847342,23.8292411 640.957854,23.5332261 C641.077449,23.0542892 641.795777,23.2933782 642.032696,23.0542892 C643.650258,21.6645371 645.615251,20.9214637 647.574945,20.9214637 C648.6566,20.9214637 649.73674,21.1476495 650.756327,21.6167193 C661.391208,26.768897 671.070085,33.9575056 683.137837,35.1567456 C683.669202,35.2630073 684.012849,36.0326461 684.586603,36.0326461 C684.657754,36.0326461 684.73269,36.021261 684.812168,35.9946955 C686.1262,35.5157585 687.440233,35.3958345 688.633913,34.9161386 C695.836112,31.6417581 703.568919,29.0132973 711.416023,29.0132973 C714.765443,29.0132973 718.1353,29.4922343 721.495317,30.6034288 C721.913143,30.7430871 722.324914,30.8045671 722.730629,30.8045671 C724.06207,30.8045671 725.322361,30.1396721 726.513013,29.4041888 C728.054882,28.4114003 729.29095,26.6064683 730.782104,26.6064683 C730.910783,26.6064683 731.040975,26.6201305 731.174195,26.648973 C737.023758,27.8406228 742.593256,27.9802811 748.150644,27.9802811 C749.859037,27.9802811 751.565917,27.9673779 753.279609,27.9673779 C756.494295,27.9673779 759.518991,26.7150071 762.773795,26.7150071 C763.15226,26.7150071 763.530726,26.7317054 763.916761,26.768897 C768.700565,27.3017239 773.015072,29.6394828 777.783737,29.6394828 C778.366574,29.6394828 778.96455,29.6038092 779.570095,29.5248719 C781.15965,29.2425192 782.741636,29.1446065 784.308483,29.1446065 C786.745801,29.1446065 789.16798,29.3791414 791.635576,29.5248719 C791.839947,29.536257 792.036749,29.5408111 792.24112,29.5408111 C792.960205,29.5408111 793.686859,29.4778131 794.413512,29.414815 C795.140166,29.351058 795.874389,29.2880599 796.616182,29.2880599 C797.146034,29.2880599 797.675885,29.3199384 798.213306,29.4041888 C802.633784,30.0387234 806.857459,31.4945096 811.23252,31.4945096 C812.647981,31.4945096 814.078581,31.3427071 815.531889,30.9624418 C815.577304,30.9548516 815.63029,30.9510566 815.668136,30.9510566 C816.311528,30.9510566 816.765686,31.7206954 817.325815,32.2800877 C817.802682,32.7597837 818.521766,32.6398597 819.119742,32.7597837 C819.80098,32.8022884 820.482218,32.8182277 821.171025,32.8182277 C822.139897,32.8182277 823.116338,32.7871081 824.092779,32.7552296 C825.06922,32.7241101 826.045661,32.6922316 827.022102,32.6922316 C830.186074,32.6922316 833.281922,33.0284742 836.090136,34.7969736 C840.866371,34.0781886 846.240581,34.9161386 850.305301,31.8003917 C852.409569,33.6076008 855.550833,35.4611096 858.449879,35.4611096 C860.168112,35.4611096 861.803083,34.8121538 863.089866,33.1195557 C863.453193,32.5199357 863.210975,31.8003917 863.453193,31.2022898 C863.649995,30.8053262 864.089015,30.5723093 864.58102,30.5723093 C864.679421,30.5723093 864.785392,30.5829355 864.883793,30.6034288 C865.527184,30.9275272 866.079744,31.8353063 866.707997,31.8353063 C866.77612,31.8353063 866.844244,31.8246801 866.912368,31.8003917 C867.631452,31.5878682 868.335398,31.5051358 869.039344,31.5051358 C871.484231,31.5051358 873.845856,32.5199357 876.358867,32.5199357 C876.411852,32.5275258 876.472407,32.5313209 876.525392,32.5313209 C876.843303,32.5313209 877.153645,32.41671 877.463987,32.3013401 C877.766759,32.1859701 878.061962,32.0698412 878.349596,32.0698412 C878.485844,32.0698412 878.614522,32.0964066 878.7432,32.1601637 C880.211646,33.0315102 881.627107,33.3829331 882.997153,33.3829331 C887.099719,33.3829331 890.81625,30.2421388 894.396534,28.4463149 C894.464658,28.4000151 894.540351,28.3810398 894.616044,28.3810398 C894.933955,28.3810398 895.304851,28.7309446 895.592485,28.9260109 C897.045793,30.5905256 898.771596,31.8937503 900.92128,31.8937503 C901.24676,31.8937503 901.57981,31.8641488 901.927998,31.8003917 C909.217244,30.4827458 916.143163,29.5248719 923.19776,28.0865429 C923.916845,23.5332261 929.291055,22.5753522 932.992448,21.3768713 C946.738316,16.9442375 960.953481,14.5472756 973.382289,7.11806 C976.478137,8.63760328 980.020574,9.7981336 983.555442,9.7981336 C986.151715,9.7981336 988.755558,9.17118916 991.185307,7.59775598 C991.223153,7.58029869 991.261,7.57270856 991.306416,7.57270856 C991.904391,7.57270856 993.440961,8.94120834 994.77316,9.27517389 C995.583076,9.46492705 996.392992,9.52564806 997.202909,9.52564806 C997.929562,9.52564806 998.648647,9.47783027 999.360162,9.42925346 C1000.07925,9.38067665 1000.79076,9.33209984 1001.49471,9.33209984 C1002.78149,9.33209984 1004.05313,9.49376953 1005.28693,10.1138828 C1007.92862,11.5279234 1011.16072,14.8341824 1014.11275,14.8341824 C1015.16488,14.8341824 1016.17917,14.4174845 1017.11776,13.3487947 C1018.91169,11.3116048 1019.50967,8.19661695 1022.73419,8.07669295 C1025.64838,8.07669295 1028.36576,6.70819318 1031.2421,6.70819318 C1031.55244,6.70819318 1031.86278,6.72337343 1032.17312,6.75828801 C1034.54232,7.08314542 1036.43464,9.36018331 1038.8871,9.36018331 C1039.15203,9.36018331 1039.41695,9.33361787 1039.69702,9.27517389 C1041.73316,8.91540191 1043.6482,7.83684496 1045.67677,7.83684496 C1045.9417,7.83380891 1046.21419,7.83229088 1046.47912,7.83229088 C1051.04341,7.83229088 1055.57743,8.28769846 1060.12659,8.74310604 C1064.67574,9.1977546 1069.23247,9.65316218 1073.84218,9.65316218 C1074.37203,9.65316218 1074.90188,9.64709008 1075.43173,9.63494588 C1076.46116,9.63494588 1077.49815,10.601169 1078.5957,10.601169 C1078.89091,10.601169 1079.18611,10.5313398 1079.48888,10.3537308 C1081.50989,9.2273561 1082.26682,5.87783336 1084.83282,5.87783336 C1084.99934,5.87783336 1085.16587,5.89149559 1085.34753,5.92033807 C1087.78485,6.36511947 1089.09434,9.08542074 1091.5695,9.08542074 C1091.75873,9.08542074 1091.95554,9.06948147 1092.15991,9.03608491 C1092.87142,8.91540191 1093.4694,8.43570592 1094.30959,8.31654094 C1103.02944,6.75828801 1111.74928,6.51919903 1119.75761,2.92451522 C1123.45144,2.7013655 1127.13769,2.52831062 1130.83152,2.52831062 C1137.06863,2.52831062 1143.32845,3.02166883 1149.63368,4.60193313 C1153.76653,5.62280512 1157.89937,5.65088858 1162.0095,5.65088858 L1162.74373,5.65088858 C1166.59651,5.65088858 1170.43415,5.675936 1174.24908,6.51919903 C1181.39451,5.00496884 1188.63077,3.74500787 1195.95029,3.74500787 C1197.31277,3.74500787 1198.68281,3.7890306 1200.06043,3.88314817 C1202.22525,4.06455219 1204.39007,4.92754955 1206.60031,4.92754955 C1207.20586,4.92754955 1207.80383,4.8645515 1208.40938,4.7081949 C1208.42452,4.59737905 1208.46993,4.48276815 1208.55319,4.36056711 C1208.41695,4.08808158 1208.36396,3.80572888 1208.56833,3.47707641 C1208.43965,3.2061089 1208.38667,2.92299719 1208.59104,2.59510374 C1208.46236,2.33020833 1208.41695,2.05165069 1208.59861,1.73058835 C1208.46236,1.4391275 1208.43965,1.12945035 1208.65916,0.768160335 C1208.88624,0.545010622 1209.12846,0.451652068 1209.37825,0.451652068 C1209.66588,0.451652068 1209.96109,0.57613014 1210.21844,0.768160335 C1211.25544,1.9977608 1212.48924,2.59662176 1213.74574,2.59662176 C1214.94169,2.59662176 1216.16035,2.05772279 1217.26547,1.00800833 C1217.46984,0.85316975 1217.69692,0.809147017 1217.93914,0.809147017 C1218.25705,0.809147017 1218.59767,0.887325318 1218.93829,0.887325318 C1219.89202,1.00800833 1220.61111,1.72603427 1221.56484,1.84671728 C1229.69428,3.16436321 1237.21817,4.9609461 1245.34761,6.27935104 C1249.52587,6.92451178 1253.60573,7.37612429 1257.76128,7.37612429 C1258.24572,7.37612429 1258.72258,7.37005219 1259.20702,7.35714898 C1260.63762,7.23798399 1262.07579,7.23798399 1263.50639,6.99889502 C1265.54253,6.63912303 1267.45,6.27935104 1269.36503,5.32071809 C1269.93273,5.09073726 1269.73593,3.75639306 1270.0387,3.75639306 C1270.05384,3.75639306 1270.06141,3.7586701 1270.07655,3.76322417 C1277.01761,5.82394346 1284.19331,7.5150236 1291.31604,7.5150236 C1294.13182,7.5150236 1296.93246,7.25088721 1299.7104,6.63912303 C1302.06446,4.41673405 1304.97864,3.78371751 1308.0215,3.78371751 C1310.38313,3.78371751 1312.82802,4.16777791 1315.12909,4.48276815 C1315.18207,4.4918763 1315.24263,4.49567136 1315.30318,4.49567136 C1315.59838,4.49567136 1315.94657,4.39016861 1316.31747,4.28542486 C1316.68836,4.17992211 1317.0744,4.07366034 1317.45286,4.07366034 C1317.59668,4.07366034 1317.7405,4.08808158 1317.87675,4.12299616 C1320.48059,4.81901074 1323.14499,6.8417794 1325.78667,6.8417794 C1326.77825,6.8417794 1327.76983,6.55487263 1328.74628,5.79965506 C1328.26941,5.68049008 1328.39052,5.08162911 1328.51163,5.08162911 C1331.84212,5.87859237 1335.1272,6.20648583 1338.37444,6.20648583 C1345.38362,6.20648583 1352.24141,4.68162946 1359.09921,3.04443921 C1361.71819,4.1313453 1364.54154,5.21825139 1367.41788,5.21825139 C1368.34891,5.21825139 1369.27993,5.1051585 1370.21096,4.84178112 C1373.62472,3.80421086 1376.41779,0.250513721 1379.74072,0.250513721 C1380.25543,0.250513721 1380.77772,0.335523136 1381.32271,0.528312344 C1385.82645,2.12603393 1390.25449,5.78902888 1395.00802,5.78902888 C1396.31751,5.78902888 1397.64214,5.5135073 1399.01218,4.84178112 C1400.56389,4.00307216 1401.39652,2.32489524 1402.83469,1.3670213 C1403.18287,1.19168938 1403.53106,1.08011453 1403.88682,1.08011453 C1404.0155,1.08011453 1404.14418,1.09529478 1404.26529,1.12717331 C1407.13405,1.84671728 1409.28374,3.88314817 1412.27362,4.24292016 C1412.55368,4.26493152 1412.83374,4.27479869 1413.11381,4.27479869 C1415.90688,4.27479869 1418.53344,3.28352819 1421.35679,3.28352819 C1423.02961,3.28352819 1424.3391,4.36208514 1425.77727,5.08162911 C1426.0649,5.17878273 1426.4358,5.35335563 1426.75371,5.35335563 C1426.8294,5.35335563 1426.90509,5.34348847 1426.97322,5.32071809 C1428.04806,4.9609461 1428.40382,3.4042112 1429.59977,3.4042112 C1431.2196,3.4042112 1432.49124,4.3476639 1434.14892,4.3476639 C1434.4517,4.3476639 1434.76961,4.31654438 1435.09509,4.24292016 C1436.72249,3.91654472 1438.36503,3.47935345 1440,3.13476172 L1440,73 L0,73 L0,39.6235349 C0.890150908,39.9112007 1.77803102,40.1852042 2.70375769,40.1852042 Z'
					id='Combined-Shape-Copy'
					fill='#f5f5f5'
				></path>
			</g>
		</svg>
	);
};
export default RippedBotton;