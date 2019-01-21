目录

1\. 查询指定联系人快递信息

---

**1\. 查询指定联系人快递信息**
###### 接口功能
> 查询指定联系人快递信息

###### URL
> [http://www.api.com/index.php](www.api.com/index.php)

###### 支持格式
> JSON

###### HTTP请求方式
> POST

###### 请求参数
> |参数|必选|类型|说明|
|:-----  |:-------|:-----|-----                               |
|activityName    |false    |string|活动名称                          |
|contactNumber    |false    |string   |联系人手机号|

###### 返回字段
> |返回字段|字段类型|说明                              |
|:-----   |:------|:-----------------------------   |
|status   |int    |返回结果状态。0：正常；1：错误。   |
|company  |string | 所属公司名                      |
|category |string |所属类型                         |

###### 接口示例
> 地址：[http://localhost/PPTSWebApp/PPTS.WebAPI.ThirdParty/api/express/GetPagedExpress]()
``` javascript
{
  activityName："",
  contactNumber:"156****8760",
  pageParams:{
    pageIndex: 1, 
    pageSize: 20
  }
}
