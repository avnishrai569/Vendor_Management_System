# Vendor Management System

This project is a Vendor Management System developed using Node.js. The system manages vendor profiles, tracks purchase orders, and calculates vendor performance metrics.

## Features

- **Vendor Profile Management**: Manage vendor information with CRUD operations.
- **Purchase Order Tracking**: Track and manage purchase orders with filtering by vendor.
- **Vendor Performance Evaluation**: Calculate and retrieve vendor performance metrics.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **Docker**: Make sure Docker and Docker Compose are installed.

## Getting Started

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/vendor-management-system.git
   cd vendor-management-system
## install dependecies 

npm install
## Set up environment variables:
DATABASE_URL=mongodb://localhost:27017/vendor_management
JWT_SECRET=your-secret-key

## Run the application:

npm run start:dev


## Docker Setup
Docker Setup

## API Documentation

## Vendor Management System API Documentation
## 1. Vendor Profile Management
## 1.1 Create a New Vendor
        Endpoint: POST /vendors
        Description: Create a new vendor profile.
        Request Body:
        json
        Copy code
        {
        "name": "Vendor Name",
        "contactDetails": "Contact Information",
        "address": "Vendor Address",
        "vendorCode": "UniqueVendorCode"
        }
        Response:
        json
        Copy code
        {
        "id": "vendorId",
        "name": "Vendor Name",
        "contactDetails": "Contact Information",
        "address": "Vendor Address",
        "vendorCode": "UniqueVendorCode",
        "onTimeDeliveryRate": 0,
        "qualityRatingAvg": 0,
        "averageResponseTime": 0,
        "fulfillmentRate": 0
        }
## 1.2 List All Vendors
        Endpoint: GET /vendors
        Description: Retrieve a list of all vendors.
        Response:
        json
        Copy code
        [
        {
            "id": "vendorId1",
            "name": "Vendor Name 1",
            "contactDetails": "Contact Information 1",
            "address": "Vendor Address 1",
            "vendorCode": "UniqueVendorCode1"
        },
        {
            "id": "vendorId2",
            "name": "Vendor Name 2",
            "contactDetails": "Contact Information 2",
            "address": "Vendor Address 2",
            "vendorCode": "UniqueVendorCode2"
        }
        ]
## 1.3 Retrieve Vendor Details
        Endpoint: GET /vendors/:vendorId
        Description: Retrieve details of a specific vendor.
        Parameters:
        vendorId (Path Parameter) - The unique identifier of the vendor.
        Response:
        json
        Copy code
        {
        "id": "vendorId",
        "name": "Vendor Name",
        "contactDetails": "Contact Information",
        "address": "Vendor Address",
        "vendorCode": "UniqueVendorCode",
        "onTimeDeliveryRate": 0,
        "qualityRatingAvg": 0,
        "averageResponseTime": 0,
        "fulfillmentRate": 0
        }
##        1.4 Update Vendor Details
        Endpoint: PUT /vendors/:vendorId
        Description: Update a vendor's details.
        Parameters:
        vendorId (Path Parameter) - The unique identifier of the vendor.
        Request Body:
        json
        Copy code
        {
        "name": "Updated Vendor Name",
        "contactDetails": "Updated Contact Information",
        "address": "Updated Vendor Address"
        }
        Response:
        json
        Copy code
        {
        "id": "vendorId",
        "name": "Updated Vendor Name",
        "contactDetails": "Updated Contact Information",
        "address": "Updated Vendor Address",
        "vendorCode": "UniqueVendorCode",
        "onTimeDeliveryRate": 0,
        "qualityRatingAvg": 0,
        "averageResponseTime": 0,
        "fulfillmentRate": 0
        }
##        1.5 Delete a Vendor
        Endpoint: DELETE /vendors/:vendorId
        Description: Delete a specific vendor.
        Parameters:
        vendorId (Path Parameter) - The unique identifier of the vendor.
        Response:
        json
        Copy code
        {
        "message": "Vendor deleted successfully"
        }
##        1.6 Retrieve Vendor Performance Metrics
        Endpoint: GET /vendors/:vendorId/performance
        Description: Retrieve performance metrics for a specific vendor.
        Parameters:
        vendorId (Path Parameter) - The unique identifier of the vendor.
        Response:
        json
        Copy code
        {
        "onTimeDeliveryRate": 85,
        "qualityRatingAvg": 4.5,
        "averageResponseTime": 2.3,
        "fulfillmentRate": 90
        }
        2. Purchase Order Tracking
##        2.1 Create a Purchase Order
        Endpoint: POST /purchase-orders
        Description: Create a new purchase order.
        Request Body:
        json
        Copy code
        {
        "poNumber": "PO123456",
        "vendor": "vendorId",
        "orderDate": "2024-08-21T00:00:00Z",
        "deliveryDate": "2024-08-30T00:00:00Z",
        "items": [
            {
            "itemName": "Item 1",
            "itemCode": "ItemCode1",
            "quantity": 10
            }
        ],
        "quantity": 10,
        "status": "pending",
        "qualityRating": null,
        "issueDate": "2024-08-21T00:00:00Z",
        "acknowledgmentDate": null
        }
        Response:
        json
        Copy code
        {
        "id": "poId",
        "poNumber": "PO123456",
        "vendor": "vendorId",
        "orderDate": "2024-08-21T00:00:00Z",
        "deliveryDate": "2024-08-30T00:00:00Z",
        "items": [
            {
            "itemName": "Item 1",
            "itemCode": "ItemCode1",
            "quantity": 10
            }
        ],
        "quantity": 10,
        "status": "pending",
        "qualityRating": null,
        "issueDate": "2024-08-21T00:00:00Z",
        "acknowledgmentDate": null
        }
 ##       2.2 List All Purchase Orders
        Endpoint: GET /purchase-orders
        Description: Retrieve a list of all purchase orders, with an option to filter by vendor.
        Query Parameters:
        vendor (Optional) - Filter by vendor ID.
        Response:
        json
        Copy code
        [
        {
            "id": "poId1",
            "poNumber": "PO123456",
            "vendor": "vendorId1",
            "orderDate": "2024-08-21T00:00:00Z",
            "deliveryDate": "2024-08-30T00:00:00Z",
            "items": [
            {
                "itemName": "Item 1",
                "itemCode": "ItemCode1",
                "quantity": 10
            }
            ],
            "quantity": 10,
            "status": "pending",
            "qualityRating": null,
            "issueDate": "2024-08-21T00:00:00Z",
            "acknowledgmentDate": null
        }
        ]
 ##       2.3 Retrieve Purchase Order Details
        Endpoint: GET /purchase-orders/:poId
        Description: Retrieve details of a specific purchase order.
        Parameters:
        poId (Path Parameter) - The unique identifier of the purchase order.
        Response:
        json
        Copy code
        {
        "id": "poId",
        "poNumber": "PO123456",
        "vendor": "vendorId",
        "orderDate": "2024-08-21T00:00:00Z",
        "deliveryDate": "2024-08-30T00:00:00Z",
        "items": [
            {
            "itemName": "Item 1",
            "itemCode": "ItemCode1",
            "quantity": 10
            }
        ],
        "quantity": 10,
        "status": "pending",
        "qualityRating": null,
        "issueDate": "2024-08-21T00:00:00Z",
        "acknowledgmentDate": null
        }
##        2.4 Update a Purchase Order
        Endpoint: PUT /purchase-orders/:poId
        Description: Update a purchase order.
        Parameters:
        poId (Path Parameter) - The unique identifier of the purchase order.
        Request Body:
        json
        Copy code
        {
        "status": "completed",
        "deliveryDate": "2024-08-29T00:00:00Z",
        "qualityRating": 4
        }
        Response:
        json
        Copy code
        {
        "id": "poId",
        "poNumber": "PO123456",
        "vendor": "vendorId",
        "orderDate": "2024-08-21T00:00:00Z",
        "deliveryDate": "2024-08-29T00:00:00Z",
        "items": [
            {
            "itemName": "Item 1",
            "itemCode": "ItemCode1",
            "quantity": 10
            }
        ],
        "quantity": 10,
        "status": "completed",
        "qualityRating": 4,
        "issueDate": "2024-08-21T00:00:00Z",
        "acknowledgmentDate": null
        }
 ##       2.5 Delete a Purchase Order
        Endpoint: DELETE /purchase-orders/:poId
        Description: Delete a specific purchase order.
        Parameters:
        poId (Path Parameter) - The unique identifier of the purchase order.
        Response:
        json
        Copy code
        {
        "message": "Purchase order deleted successfully"
        }
##        3. Vendor Performance Metrics
##        3.1 Retrieve Vendor Performance Metrics
        Endpoint: GET /vendors/:vendorId/performance
        Description: Retrieve performance metrics for a specific vendor.
        Parameters:
        vendorId (Path Parameter) - The unique identifier of the vendor.
        Response:
        json
        Copy code
        {
        "onTimeDeliveryRate": 85,
        "qualityRatingAvg": 4.5,
        "averageResponseTime": 2.3,
        "fulfillmentRate": 90
        }



## Deployment
npm run build
npm run start:prod

