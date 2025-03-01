<!-- Add this JavaScript just before the closing </body> tag -->
<script>
  // Learn More button functionality
  function showLearnMore() {
    alert("Eco-friendly clothing helps reduce waste and supports sustainable practices. Choose wisely!");
  }

  // Team member details functionality
  function showMemberDetails(memberName) {
    const details = {
      "Dibyajyotee Ghosh": "Section-Q, Roll-42\nB.Tech in Electronics And Communication Engineering\nUniversity of Engineering and Management",
      "Tanisha Dhar": "Section-Q, Roll-96\nB.Tech in Computer Science and Technology\nUniversity of Engineering and Management",
      "Rajanya Majumder": "Section-Q, Roll-59\nB.Tech in Electronics And Communication Engineering\nUniversity of Engineering and Management"
    };
    alert(`${memberName}:\n\n${details[memberName]}`);
  }
</script>

<!-- Add these buttons to the center card (after the progress bars) -->
<div class="flex flex-col space-y-2 mt-4">
  <button onclick="showLearnMore()" 
          class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
    Learn More
  </button>
  <a href="https://web.nen.wfglobal.org/en/ventures/profile/67875c8d8c12a4a29bcee781" 
     target="_blank"
     class="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors text-center">
    Visit Our Venture
  </a>
</div>

<!-- Update the team member names to be clickable (in the Team Members section) -->
<p class="text-sm mt-2 cursor-pointer hover:text-blue-500" onclick="showMemberDetails('Tanisha Dhar')">Tanisha Dhar</p>
<p class="text-sm mt-2 cursor-pointer hover:text-blue-500" onclick="showMemberDetails('Dibyajyotee Ghosh')">Dibyajyotee Ghosh</p>
<p class="text-sm mt-2 cursor-pointer hover:text-blue-500" onclick="showMemberDetails('Rajanya Majumder')">Rajanya Majumder</p>