<h2 style="text-align: center">Book a car?</h2>
<div class="container" style="width: 40%; border: 1px solid black; padding: 20px; margin-bottom: 100px;">

    <form>

        <div class="form-group">
            <label for="full_name">Full Name</label>
            <input type="text" id="full_name" name="full_name" class="form-control"/>
        </div>

        <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" class="form-control"/>
        </div>

        <div class="form-group">
            <label for="phone_number">Phone Number</label>
            <input type="text" id="phone_number" name="phone_number" class="form-control" value="0123456789" disabled/>
        </div>

        <div class="form-group">
            <label for="notes">Notes</label>
            <textarea id="notes" name="notes" class="form-control"></textarea>
        </div>

        <div class="form-group" style="text-align: center">
            <button type="submit" class="btn btn-primary" style="width: 100%">Submit</button>
        </div>

    </form>
</div>
