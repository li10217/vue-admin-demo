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

###### 请求参数
> 
|参数|必选|类型|说明|
|:-----  |:-------|:-----|-----                               |
|activityName     |ture  |string|请求的项目名                          |
|contactNumber    |true  |int   |请求项目的类型。1：类型一；2：类型二 。|

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

###### 接口示例
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
