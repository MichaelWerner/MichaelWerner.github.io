        function showModal(paramModal, spanID){

          // Get the modal to be shown
          var modal = document.getElementById(paramModal);
          
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[spanID];
          modal.style.display = "block";
          
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
        }
        
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          // Get all modal windows
          var allModals = document.querySelectorAll(".modal");
          var ids = [].map.call(allModals, function(elem) {
            return elem.id;
          });

          // Close the open modal
          ids.forEach(item =>{
            var modal = document.getElementById(item);
            if (event.target == modal){
              modal.style.display = "none";
            }  
          });
        }
        