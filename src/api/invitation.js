import service from '../utils/request'

export function tableData() {
  service.get('http://localhost:8080/sales/api/v1/partnerInvitation/invitations?pageNo=1&pageSize=10').then(res => {
    console.log('res--------', res)
  })
}

//  headers: {
// "Access-Control-Allow-Origin": "*",
// "token": "eyJhbGciOiJIUzI1NiJ9.eyJvZmZpY2VfaWQiOiI0ZDc5MmUzMTZhMDUxMWU2YWE3NjAwMTYzZTE2MmFkZCIsImRldmljZVR5cGUiOiJ3ZWIiLCJvZmZpY2VfbmFtZSI6ImlDb3VydCIsInVzZXJfdHlwZSI6IkEiLCJ1c2VyX2lkIjoiMDFDRUI0RTE2RDI0MTFFNkE1QzIwMDE2M0UwMDIwRDEiLCJsb2dpblR5cGUiOiIyIiwidXNlcl9uYW1lIjoi546L5YKoMSIsImlzcyI6ImlMYXcuY29tIiwiZXhwIjoxNTczMjcwMzY0MjY2LCJpYXQiOjE1NzA2NzgzNjQyNjYsIm9mZmljZVR5cGUiOiJpbnRlZ3JhdGlvbiJ9.uiuaaT-nuQg4fbI-Be1522qkbUfFK7EnETZoTqgVJyo"
// }
