import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class OpenAIAPIClient {
    public static void main(String[] args) {
        try {
            // Set the API endpoint URL
            String endpointURL = "https://api.openai.com/v1/completions";  // Replace with the appropriate endpoint

            // Create a URL object and open a connection
            URL url = new URL(endpointURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();

            // Set up the HTTP request method, headers, and API key
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Authorization", "Bearer sk-proj-o8ukxZ3pwG54qrX67uqBT3BlbkFJhRlO8AxKOneU1QZ2xuGd"); // Replaced with my API key
            connection.setRequestProperty("Content-Type", "application/json");

            // Construct the request body (example JSON input for ChatGPT)
            String requestBody = "{\"prompt\":\"Once upon a time in a\", \"max_tokens\": 50}";  // Customize the prompt and options

            // Enable output stream and send the request body
            connection.setDoOutput(true);
            OutputStream os = connection.getOutputStream();
            os.write(requestBody.getBytes());
            os.close();

            // Read the API response
            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String inputLine;
            StringBuilder response = new StringBuilder();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // Close the connection
            connection.disconnect();

            // Print the API response
            System.out.println("API Response: " + response.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
