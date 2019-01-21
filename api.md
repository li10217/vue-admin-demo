目录

1\. 查询指定联系人快递信息

---

**1\. 查询指定联系人快递信息**
###### 接口功能
> 查询指定联系人快递信息

###### URL
> [http://localhost/PPTSWebApp/PPTS.WebAPI.ThirdParty/api/express/GetPagedExpress](http://localhost/PPTSWebApp/PPTS.WebAPI.ThirdParty/api/express/GetPagedExpress)

###### 支持格式
> JSON

###### HTTP请求方式
> POST

###### HTTP请求身份验证
> 请求头添加 AuthToken: "430B0CFA-38B6-4F12-85A4-BA4C933F3DC9" 固定值

###### 请求参数
> 
|参数|必选|类型|说明|
|:-----  |:-------|:-----|-----                               |
|activityName     |false  |string|活动名称                     |
|contactNumber    |false  |int   |联系人手机号                  |
|pageParams       |true  |object   | pageParams:{pageIndex: 1, pageSize: 20}         |

###### 返回字段
> 
|返回字段|字段类型|说明                              |
|:-----   |:------|:-----------------------------   |
|expressageID   |string    |快递信息ID   |
|expressNumber  |string | 快递单号                      |
|expressCompany |string | 快递公司                        |
|contactPerson |string | 联系人姓名                        |
|contactNumber |string | 联系人手机号                        |
|expressCompany |string | 快递公司                        |

###### 接口请求示例
> 地址：[http://localhost/PPTSWebApp/PPTS.WebAPI.ThirdParty/api/express/GetPagedExpress](http://localhost/PPTSWebApp/PPTS.WebAPI.ThirdParty/api/express/GetPagedExpress)
``` javascript
{
  activityName："",
  contactNumber:"156****8760",
  pageParams:{
    pageIndex: 1, 
    pageSize: 20
  }
}
```
###### 接口返回结果
``` javascript
{
  pageIndex: 1,
  pageSize: 20,
  totalCount: 3,
  totalCount: 3:[
    {
      ctivityName: "a@qweq34#$%",
      contactNumber: "c#$%",
      contactPerson: "b#$%",
      createTime: "2019-01-04T16:10:56.2+08:00",
      creatorID: "69423",
      creatorName: "宋兴波",
      expressCompany: "d#$%",
      expressNumber: "e#$%",
      expressStatus: "0",
      expressageID: "03719844-f5dc-8671-408a-7292454c68d4"
    }
  ]
}
```

