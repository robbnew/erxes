const bookingFields = `
  _id
  name
  image {
    name
    url
    type
    size
  }

  tagIds

  tags {
    _id
    name
  }

  description
  createdDate
  brand {
    _id
    name
  }

  createdUser {
    _id

    details {
      avatar
      fullName
      position
    }
  }
  
  title
  brandId
  channelIds
  languageCode
  productStatus
  formId
  buttonText

  styles {
    itemShape
    widgetColor

    productAvailable
    productUnavailable
    productSelected

    textAvailable
    textUnavailable
    textSelected
  }
`;

const queryParamsDef = `
  $page: Int,
  $perPage: Int,
  $brandId: String,
  $tagId: String
`;
const queryParamsVal = `
  page: $page,
  perPage: $perPage,
  brandId: $brandId,
  tagId: $tagId
`;

const bookingDetail = `
  query bookingDetail($_id: String!) {
    bookingDetail(_id: $_id) {
      ${bookingFields}  
    }
  }
`;

const bookings = `
  query bookings(${queryParamsDef}) {
    bookings(${queryParamsVal}) {
      ${bookingFields}
    }
  }
`;

const productCategories = `
  query productCategories($parentId: String, $searchValue: String) {
    productCategories(parentId: $parentId, searchValue: $searchValue) {
      _id
      name
    }
  }
`;

export default { bookingDetail, bookings, productCategories };