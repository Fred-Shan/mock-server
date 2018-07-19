const data = {
	"files": [
		{
			"name": "00000000000000000000000000000001/etc/mac/product/product.json",
			"path": "",
			"type": "",
			"size": 459,
			"timestamp": 0,
			"created": 0,
			"updated": 1531717669,
			"createdBy": "Owner [name=1733718621660886,id=1733718621660886]",
			"updatedBy": "",
			"description": "",
			"eTag": "CF9E25B860D79F8174D4981618AF4B06"
		}
	],
	"product": {
		"Basic": {
			"Description": "3RW51 product description",
			"ProductName": "3RW51"
		},
		"Model": {
			"class": "go.GraphLinksModel",
			"linkDataArray": [
				{
					"from": -1,
					"to": -3
				},
				{
					"from": -2,
					"to": -3
				}
			],
			"nodeDataArray": [
				{
					"category": "OfGroups",
					"key": -1,
					"loc": "-289.6000061035156 222",
					"text": "3RW51_S4"
				},
				{
					"category": "OfGroups",
					"key": -2,
					"loc": "-291.6000061035156 357",
					"text": "3RW51_S2S3"
				},
				{
					"category": "OfGroups",
					"key": -3,
					"loc": "-45.600006103515625 293",
					"text": "3RW51_Test"
				}
			]
		},
		"Version": "v3.5"
	},
	"productionLineFiles": {
		"8a8181066434b3b10164694fa3ac000f": [{
			"name": "8a8181066434b3b10164694fa3ac000f/etc/mac/line/product_line.json",
			"path": "",
			"type": "",
			"size": 459,
			"timestamp": 0,
			"created": 0,
			"updated": 1531717669,
			"createdBy": "Owner [name=1733718621660886,id=1733718621660886]",
			"updatedBy": "",
			"description": "",
			"eTag": "CF9E25B860D79F8174D4981618AF4B06"
		}],
		"8a8181066434b3b10164457b4ec40006": [{
			"name": "8a8181066434b3b10164457b4ec40006/etc/mac/line/product_line.json",
			"path": "",
			"type": "",
			"size": 459,
			"timestamp": 0,
			"created": 0,
			"updated": 1531717669,
			"createdBy": "Owner [name=1733718621660886,id=1733718621660886]",
			"updatedBy": "",
			"description": "",
			"eTag": "CF9E25B860D79F8174D4981618AF4B06"
		}],
		"8a8181066434b3b101644b08897a0008": [{
			"name": "8a8181066434b3b101644b08897a0008/etc/mac/line/product_line.json",
			"path": "",
			"type": "",
			"size": 459,
			"timestamp": 0,
			"created": 0,
			"updated": 1531717669,
			"createdBy": "Owner [name=1733718621660886,id=1733718621660886]",
			"updatedBy": "",
			"description": "",
			"eTag": "CF9E25B860D79F8174D4981618AF4B06"
		}]
	},
	"productionLineFile": {
		"8a8181066434b3b10164694fa3ac000f": {
			"Version": "2018-04-03 12:12:12",
			"Basic": {
				"ProductionLineName": "3RW51_S4",
				"Description": "3RW51 test line description"
			},

			"Model": {
				"class": "go.GraphLinksModel",
				"nodeDataArray": [
					{ "text": "MachineTool", "color": "orange", "isGroup": true, "category": "OfGroups", "key": -3, "loc": "-379.4499969482422 112.39999389648438" },
					{ "text": "Robot", "color": "green", "isGroup": true, "category": "OfGroups", "key": -4, "loc": "-176.4499969482422 59.399993896484375" },
					{ "text": "WorkStation", "key": 1, "isGroup": true, "category": "OfGroups", "loc": "53.55000305175781 99.39999389648438" },
					{ "text": "Motor", "key": 2, "color": "pink", "isGroup": true, "category": "OfGroups", "loc": "222.5500030517578 200.3999938964844" },
					{ "text": "TemperatureSensor", "color": "orange", "key": -2, "loc": "-374.4499969482422 117.39999389648438", "group": -3 },
					{ "text": "CurrentSensor", "color": "green", "key": -6, "loc": "-374.4499969482422 147.39999389648438", "group": -3 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -7, "loc": "-171.4499969482422 64.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -8, "loc": "-171.4499969482422 94.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -9, "loc": "58.55000305175781 104.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -1, "loc": "58.55000305175781 134.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -11, "loc": "227.5500030517578 205.3999938964844", "group": 2 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -12, "loc": "227.5500030517578 235.3999938964844", "group": 2 },
					{ "text": "CurrentSensor", "color": "green", "key": -13, "loc": "227.5500030517578 265.3999938964844", "group": 2 },
					{ "text": "BarCode", "color": "pink", "key": -14, "loc": "227.5500030517578 295.3999938964844", "group": 2 }
				],
				"linkDataArray": [
					{ "from": -3, "to": -4 },
					{ "from": -4, "to": 1 },
					{ "from": 1, "to": 2 }
				]
			},

			"MessageTypes": [
				{
					"Name": "ChangeOver",
					"Description": "description",
					"Outputs": [
						{
							"Name": "ChangeOver",
							"DataType": "DOUBLE",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "OUTPUT",
					"Description": "description",
					"Outputs": [
						{
							"Name": "OUTPUT",
							"DataType": "INT",
							"Unit": "One"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "FPY",
					"Description": "description",
					"Outputs": [
						{
							"Name": "FPY",
							"DataType": "DOUBLE",
							"Unit": "%"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "STATUS",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STATUS",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "STOPCODE",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STOPCODE",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				}
			]
		},
		"8a8181066434b3b10164457b4ec40006": {
			"Version": "2018-04-03 12:12:12",
			"Basic": {
				"ProductionLineName": "3RW51_S2S3",
				"Description": "3RW51 test line description"
			},

			"Model": {
				"class": "go.GraphLinksModel",
				"nodeDataArray": [
					{ "text": "MachineTool", "color": "orange", "isGroup": true, "category": "OfGroups", "key": -3, "loc": "-379.4499969482422 112.39999389648438" },
					{ "text": "Robot", "color": "green", "isGroup": true, "category": "OfGroups", "key": -4, "loc": "-176.4499969482422 59.399993896484375" },
					{ "text": "WorkStation", "key": 1, "isGroup": true, "category": "OfGroups", "loc": "53.55000305175781 99.39999389648438" },
					{ "text": "Motor", "key": 2, "color": "pink", "isGroup": true, "category": "OfGroups", "loc": "222.5500030517578 200.3999938964844" },
					{ "text": "TemperatureSensor", "color": "orange", "key": -2, "loc": "-374.4499969482422 117.39999389648438", "group": -3 },
					{ "text": "CurrentSensor", "color": "green", "key": -6, "loc": "-374.4499969482422 147.39999389648438", "group": -3 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -7, "loc": "-171.4499969482422 64.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -8, "loc": "-171.4499969482422 94.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -9, "loc": "58.55000305175781 104.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -1, "loc": "58.55000305175781 134.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -11, "loc": "227.5500030517578 205.3999938964844", "group": 2 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -12, "loc": "227.5500030517578 235.3999938964844", "group": 2 },
					{ "text": "CurrentSensor", "color": "green", "key": -13, "loc": "227.5500030517578 265.3999938964844", "group": 2 },
					{ "text": "BarCode", "color": "pink", "key": -14, "loc": "227.5500030517578 295.3999938964844", "group": 2 }
				],
				"linkDataArray": [
					{ "from": -3, "to": -4 },
					{ "from": -4, "to": 1 },
					{ "from": 1, "to": 2 }
				]
			},

			"MessageTypes": [
				{
					"Name": "ChangeOver",
					"Description": "description",
					"Outputs": [
						{
							"Name": "ChangeOver",
							"DataType": "DOUBLE",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "OUTPUT",
					"Description": "description",
					"Outputs": [
						{
							"Name": "OUTPUT",
							"DataType": "INT",
							"Unit": "One"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "FPY",
					"Description": "description",
					"Outputs": [
						{
							"Name": "FPY",
							"DataType": "DOUBLE",
							"Unit": "%"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "STATUS",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STATUS",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "STOPCODE",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STOPCODE",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				}
			]
		},
		"8a8181066434b3b101644b08897a0008": {
			"Version": "2018-04-03 12:12:12",
			"Basic": {
				"ProductionLineName": "3RW51_Test",
				"Description": "3RW51 test line description"
			},

			"Model": {
				"class": "go.GraphLinksModel",
				"nodeDataArray": [
					{ "text": "MachineTool", "color": "orange", "isGroup": true, "category": "OfGroups", "key": -3, "loc": "-379.4499969482422 112.39999389648438" },
					{ "text": "Robot", "color": "green", "isGroup": true, "category": "OfGroups", "key": -4, "loc": "-176.4499969482422 59.399993896484375" },
					{ "text": "WorkStation", "key": 1, "isGroup": true, "category": "OfGroups", "loc": "53.55000305175781 99.39999389648438" },
					{ "text": "Motor", "key": 2, "color": "pink", "isGroup": true, "category": "OfGroups", "loc": "222.5500030517578 200.3999938964844" },
					{ "text": "TemperatureSensor", "color": "orange", "key": -2, "loc": "-374.4499969482422 117.39999389648438", "group": -3 },
					{ "text": "CurrentSensor", "color": "green", "key": -6, "loc": "-374.4499969482422 147.39999389648438", "group": -3 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -7, "loc": "-171.4499969482422 64.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -8, "loc": "-171.4499969482422 94.39999389648438", "group": -4 },
					{ "text": "BarCode", "color": "pink", "key": -9, "loc": "58.55000305175781 104.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -1, "loc": "58.55000305175781 134.39999389648438", "group": 1 },
					{ "text": "VibrationSensor", "color": "lightblue", "key": -11, "loc": "227.5500030517578 205.3999938964844", "group": 2 },
					{ "text": "TemperatureSensor", "color": "orange", "key": -12, "loc": "227.5500030517578 235.3999938964844", "group": 2 },
					{ "text": "CurrentSensor", "color": "green", "key": -13, "loc": "227.5500030517578 265.3999938964844", "group": 2 },
					{ "text": "BarCode", "color": "pink", "key": -14, "loc": "227.5500030517578 295.3999938964844", "group": 2 }
				],
				"linkDataArray": [
					{ "from": -3, "to": -4 },
					{ "from": -4, "to": 1 },
					{ "from": 1, "to": 2 }
				]
			},

			"MessageTypes": [
				{
					"Name": "ChangeOver",
					"Description": "description",
					"Outputs": [
						{
							"Name": "ChangeOver",
							"DataType": "DOUBLE",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "OUTPUT",
					"Description": "description",
					"Outputs": [
						{
							"Name": "OUTPUT",
							"DataType": "INT",
							"Unit": "One"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "FPY",
					"Description": "description",
					"Outputs": [
						{
							"Name": "FPY",
							"DataType": "DOUBLE",
							"Unit": "%"
						}
					],
					"Options": {
						"Reset": ["OneDay", "ChangeOver"]
					}
				},
				{
					"Name": "STATUS",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STATUS",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				},
				{
					"Name": "STOPCODE",
					"Description": "description",
					"Outputs": [
						{
							"Name": "STOPCODE",
							"DataType": "STRING",
							"Unit": ""
						}
					],
					"Options": {
					}
				}
			]
		}
	},
	"assets": {
		"_embedded": {
			"assets": [
				{
					"assetId": "8a8181066434b3b10164694fa3ac000f",
					"description": "description",
					"name": "3RW51_S4",
					"parentId": "c27a28b6eb16b507fabc11e75da8b4ce",
					"tenantId": "chengdu",
					"aspects": [
						{
							"name": "ChangeOver",
							"variables": [
								{
									"name": "ChangeOver",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "FPY",
							"variables": [
								{
									"name": "FPY",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "OUTPUT",
							"variables": [
								{
									"name": "OUTPUT",
									"type": "INT"
								}
							]
						},
						{
							"name": "STOPCODE",
							"variables": [
								{
									"name": "STOPCODE",
									"type": "STRING"
								}
							]
						},
						{
							"name": "STATUS",
							"variables": [
								{
									"name": "STATUS",
									"type": "STRING"
								}
							]
						}
					],
					"_links": {
						"self": {
							"href": "http://localhost:8080/assets/8a8181066434b3b10164694fa3ac000f"
						},
						"parent": {
							"href": "http://localhost:8080/assets/c27a28b6eb16b507fabc11e75da8b4ce"
						}
					}
				},
				{
					"assetId": "8a8181066434b3b10164457b4ec40006",
					"description": "description",
					"name": "3RW51_S2S3",
					"parentId": "c27a28b6eb16b507fabc11e75da8b4ce",
					"tenantId": "chengdu",
					"aspects": [
						{
							"name": "ChangeOver",
							"variables": [
								{
									"name": "ChangeOver",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "FPY",
							"variables": [
								{
									"name": "FPY",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "OUTPUT",
							"variables": [
								{
									"name": "OUTPUT",
									"type": "INT"
								}
							]
						},
						{
							"name": "STOPCODE",
							"variables": [
								{
									"name": "STOPCODE",
									"type": "STRING"
								}
							]
						},
						{
							"name": "STATUS",
							"variables": [
								{
									"name": "STATUS",
									"type": "STRING"
								}
							]
						}
					],
					"_links": {
						"self": {
							"href": "http://localhost:8080/assets/8a8181066434b3b10164457b4ec40006"
						},
						"parent": {
							"href": "http://localhost:8080/assets/c27a28b6eb16b507fabc11e75da8b4ce"
						}
					}
				},
				{
					"assetId": "8a8181066434b3b101644b08897a0008",
					"description": "description",
					"name": "3RW51_Test",
					"parentId": "c27a28b6eb16b507fabc11e75da8b4ce",
					"tenantId": "chengdu",
					"aspects": [
						{
							"name": "ChangeOver",
							"variables": [
								{
									"name": "ChangeOver",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "FPY",
							"variables": [
								{
									"name": "FPY",
									"type": "DOUBLE"
								}
							]
						},
						{
							"name": "OUTPUT",
							"variables": [
								{
									"name": "OUTPUT",
									"type": "INT"
								}
							]
						},
						{
							"name": "STOPCODE",
							"variables": [
								{
									"name": "STOPCODE",
									"type": "STRING"
								}
							]
						},
						{
							"name": "STATUS",
							"variables": [
								{
									"name": "STATUS",
									"type": "STRING"
								}
							]
						}
					],
					"_links": {
						"self": {
							"href": "http://localhost:8080/assets/8a8181066434b3b101644b08897a0008"
						},
						"parent": {
							"href": "http://localhost:8080/assets/c27a28b6eb16b507fabc11e75da8b4ce"
						}
					}
				}
			]
		},
		"_links": {
			"first": {
				"href": "http://localhost:8080/assets?page=0&size=10&sort=name,asc"
			},
			"self": {
				"href": "http://localhost:8080/assets{?filter}",
				"templated": true
			},
			"last": {
				"href": "http://localhost:8080/assets?page=1&size=10&sort=name,asc"
			}
		},
		"page": {
			"size": 10,
			"totalElements": 16,
			"totalPages": 2,
			"number": 0
		}
	},
	"OUTPUT": {
		"8a8181066434b3b10164694fa3ac000f": [],
		"8a8181066434b3b10164457b4ec40006": [],
		"8a8181066434b3b101644b08897a0008": []
	},
	"FPY": {
		"8a8181066434b3b10164694fa3ac000f": [],
		"8a8181066434b3b10164457b4ec40006": [],
		"8a8181066434b3b101644b08897a0008": []
	},
	"STATUS": {
		"8a8181066434b3b10164694fa3ac000f": [],
		"8a8181066434b3b10164457b4ec40006": [],
		"8a8181066434b3b101644b08897a0008": []
	},
	"ChangeOver": {
		"8a8181066434b3b10164694fa3ac000f": [],
		"8a8181066434b3b10164457b4ec40006": [],
		"8a8181066434b3b101644b08897a0008": []
	},
	"STOPCODE": {
		"8a8181066434b3b10164694fa3ac000f": [],
		"8a8181066434b3b10164457b4ec40006": [],
		"8a8181066434b3b101644b08897a0008": []
	}
};

const assginValue = (kpi, timestamp, generator) => {
	for (let key in data[kpi]) {
		data[kpi][key].push({ _time: timestamp, kpi: generator() });
	}
};

const generateNum = () => Math.round(Math.random() * 100);

const generateStatus = (status1, status2) => Math.round(Math.random()) === 0 ? status1 : status2;

module.exports = () => {
	let counter = 0;
	let timestamp = new Date().toISOString();
	assginValue('STATUS', timestamp, generateStatus.bind(this, 'Stop', 'Working'));
	let timer = setInterval(() => {
		counter += 1;
		timestamp = new Date().toISOString();
		assginValue('FPY', timestamp, generateNum);
		assginValue('OUTPUT', timestamp, generateNum);
		if (counter === 3) {
			assginValue('STATUS', timestamp, generateStatus.bind(this, 'abc', 'def'));
		}
		if (counter === 6) {
			counter = 0;
			assginValue('STATUS', timestamp, generateStatus.bind(this, 'Stop', 'Working'));
		}
	}, 5000);

	return data
}
