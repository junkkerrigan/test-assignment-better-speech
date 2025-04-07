# Requirements

This task involves setting up a personal test account on stripe to connect with using the stripe API. 
Use of AI is of course advised to speed coding along (we would actually love to hear how AI was used to build with)

Assignment: Building a Payment Integration on Wix using Stripe Elements

Objective: Create a Wix page that integrates Stripe's payment elements to provide multiple payment options. The integration should also include a webhook trigger to save the payment details into a Wix collection when a payment is successful.

Requirements:

    Stripe Payment Integration:

        Integrate Stripe’s Payment Elements to enable customers to pay using different methods (credit card, Apple Pay, Google Pay, etc.).

        Use the Stripe Elements API to create a payment form that collects the customer's payment details securely.

        Ensure the payment options are responsive and user-friendly across various devices.

    Webhook Integration:

        Implement a Stripe webhook to listen for successful payments and trigger an action when a payment is confirmed.

        The webhook should send payment information, including:

            First Name of the customer

            Stripe Customer ID

            Paid On (date and time of payment)

            Paid With (the payment method used, such as card, Apple Pay, etc.)

        Once a payment is successful, the webhook should save the above information into a Wix collection.

    Database Integration (Wix Collections):

        Create a Wix Collection to store payment details. This collection should have the following fields:

            First Name

            Stripe Customer ID

            Paid On (date and time)

            Paid With (payment method)

        After a successful payment, the information from the webhook should automatically populate the collection.

    Testing and Verification:

        Test the entire payment process, from the Stripe Payment form on the Wix site to the successful webhook trigger.

        Ensure that when a payment is made, the correct details appear in the Wix collection.

    Security Considerations:

        Ensure that all sensitive payment information (like credit card details) is handled securely by Stripe and not stored directly on Wix servers.

        Use secure connections (HTTPS) for all communications between the Wix site, Stripe API, and webhook.

    Documentation:

        Provide detailed instructions for setting up and configuring the Stripe API and webhooks in Wix.

        Include explanations of how the webhook works and how to troubleshoot common issues.
