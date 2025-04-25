
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressScalarFieldEnum = {
  addressId: 'addressId',
  cityId: 'cityId',
  stateId: 'stateId',
  country: 'country',
  location: 'location',
  latitude: 'latitude',
  longitude: 'longitude',
  customerId: 'customerId',
  employeeId: 'employeeId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AttendanceScalarFieldEnum = {
  attendanceId: 'attendanceId',
  employeeId: 'employeeId',
  datetime: 'datetime',
  note: 'note',
  status: 'status'
};

exports.Prisma.AuthScalarFieldEnum = {
  authId: 'authId',
  email: 'email',
  password: 'password',
  roleId: 'roleId',
  employeeId: 'employeeId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.AuthLogScalarFieldEnum = {
  id: 'id',
  authId: 'authId',
  method: 'method',
  url: 'url',
  status: 'status',
  responseTime: 'responseTime',
  ip: 'ip',
  userAgent: 'userAgent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartScalarFieldEnum = {
  cartId: 'cartId',
  authId: 'authId',
  userId: 'userId',
  productId: 'productId',
  quantity: 'quantity',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CartnoteScalarFieldEnum = {
  cartnoteId: 'cartnoteId',
  cartId: 'cartId',
  note: 'note',
  status: 'status'
};

exports.Prisma.CategoryScalarFieldEnum = {
  categoryId: 'categoryId',
  picture: 'picture',
  categoryName: 'categoryName',
  memo: 'memo',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CityScalarFieldEnum = {
  cityId: 'cityId',
  stateId: 'stateId',
  name: 'name'
};

exports.Prisma.CustomerScalarFieldEnum = {
  customerId: 'customerId',
  firstName: 'firstName',
  lastName: 'lastName',
  gender: 'gender',
  phone: 'phone',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerinfoScalarFieldEnum = {
  customerinfoId: 'customerinfoId',
  customerId: 'customerId',
  picture: 'picture',
  region: 'region',
  email: 'email',
  address: 'address',
  country: 'country',
  note: 'note',
  status: 'status'
};

exports.Prisma.DepartmentScalarFieldEnum = {
  departmentId: 'departmentId',
  departmentName: 'departmentName',
  memo: 'memo',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmployeeScalarFieldEnum = {
  employeeId: 'employeeId',
  firstName: 'firstName',
  lastName: 'lastName',
  gender: 'gender',
  dob: 'dob',
  phone: 'phone',
  positionId: 'positionId',
  departmentId: 'departmentId',
  salary: 'salary',
  hiredDate: 'hiredDate',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EmployeeinfoScalarFieldEnum = {
  employeeinfoId: 'employeeinfoId',
  employeeId: 'employeeId',
  picture: 'picture',
  region: 'region',
  email: 'email',
  note: 'note',
  status: 'status'
};

exports.Prisma.ImageAddressScalarFieldEnum = {
  imageId: 'imageId',
  imageUrl: 'imageUrl',
  imageType: 'imageType',
  addressId: 'addressId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  method: 'method',
  url: 'url',
  status: 'status',
  responseTime: 'responseTime',
  ip: 'ip',
  userAgent: 'userAgent',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  notificationId: 'notificationId',
  authId: 'authId',
  userId: 'userId',
  title: 'title',
  content: 'content',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PaymentScalarFieldEnum = {
  paymentId: 'paymentId',
  employeeId: 'employeeId',
  saleId: 'saleId',
  reservationId: 'reservationId',
  invoice: 'invoice',
  hash: 'hash',
  fromAccountId: 'fromAccountId',
  toAccountId: 'toAccountId',
  currency: 'currency',
  amount: 'amount',
  externalRef: 'externalRef',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PositionScalarFieldEnum = {
  positionId: 'positionId',
  departmentId: 'departmentId',
  positionName: 'positionName',
  memo: 'memo',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductScalarFieldEnum = {
  productId: 'productId',
  productName: 'productName',
  categoryId: 'categoryId',
  picture: 'picture',
  price: 'price',
  discountRate: 'discountRate',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductstockScalarFieldEnum = {
  productstockId: 'productstockId',
  productId: 'productId',
  supplierId: 'supplierId',
  invNumber: 'invNumber',
  productAdd: 'productAdd',
  addPrice: 'addPrice',
  addDate: 'addDate',
  memo: 'memo',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RoleScalarFieldEnum = {
  roleId: 'roleId',
  name: 'name',
  status: 'status'
};

exports.Prisma.SaleScalarFieldEnum = {
  saleId: 'saleId',
  employeeId: 'employeeId',
  roomId: 'roomId',
  customerId: 'customerId',
  saleDate: 'saleDate',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SaledetailScalarFieldEnum = {
  saledetailId: 'saledetailId',
  saleId: 'saleId',
  productId: 'productId',
  quantity: 'quantity',
  amount: 'amount',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StateScalarFieldEnum = {
  stateId: 'stateId',
  name: 'name'
};

exports.Prisma.SupplierScalarFieldEnum = {
  supplierId: 'supplierId',
  supplierName: 'supplierName',
  companyName: 'companyName',
  phone: 'phone',
  email: 'email',
  address: 'address',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TokenScalarFieldEnum = {
  tokenId: 'tokenId',
  authId: 'authId',
  userId: 'userId',
  token: 'token',
  deviceInfo: 'deviceInfo',
  ipAddress: 'ipAddress',
  expiresAt: 'expiresAt',
  createdAt: 'createdAt'
};

exports.Prisma.AccountScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  provider: 'provider',
  providerAccountId: 'providerAccountId',
  refresh_token: 'refresh_token',
  access_token: 'access_token',
  expires_at: 'expires_at',
  token_type: 'token_type',
  scope: 'scope',
  id_token: 'id_token',
  session_state: 'session_state'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expires: 'expires'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  emailVerified: 'emailVerified',
  image: 'image'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Status = exports.$Enums.Status = {
  active: 'active',
  pending: 'pending',
  inactive: 'inactive'
};

exports.AccountStatus = exports.$Enums.AccountStatus = {
  active: 'active',
  dormant: 'dormant',
  suspended: 'suspended'
};

exports.Gender = exports.$Enums.Gender = {
  male: 'male',
  female: 'female',
  others: 'others'
};

exports.Prisma.ModelName = {
  Address: 'Address',
  Attendance: 'Attendance',
  Auth: 'Auth',
  AuthLog: 'AuthLog',
  Cart: 'Cart',
  Cartnote: 'Cartnote',
  Category: 'Category',
  City: 'City',
  Customer: 'Customer',
  Customerinfo: 'Customerinfo',
  Department: 'Department',
  Employee: 'Employee',
  Employeeinfo: 'Employeeinfo',
  ImageAddress: 'ImageAddress',
  Log: 'Log',
  Notification: 'Notification',
  Payment: 'Payment',
  Position: 'Position',
  Product: 'Product',
  Productstock: 'Productstock',
  Role: 'Role',
  Sale: 'Sale',
  Saledetail: 'Saledetail',
  State: 'State',
  Supplier: 'Supplier',
  Token: 'Token',
  Account: 'Account',
  Session: 'Session',
  User: 'User'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
