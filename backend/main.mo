import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";

actor {
  type Category = { #signatureSweets; #specialties };

  type Product = {
    name : Text;
    description : Text;
    category : Category;
    price : Nat;
  };

  type Testimonial = {
    customerName : Text;
    rating : Nat;
    review : Text;
  };

  type ContactInquiry = {
    name : Text;
    email : Text;
    phone : Text;
    inquiry : Text;
    isBulkOrder : Bool;
  };

  let productStore = Map.empty<Text, Product>();
  let testimonialStore = Map.empty<Text, Testimonial>();
  let contactInquiryStore = Map.empty<Text, ContactInquiry>();

  public shared func addProduct(n : Text, d : Text, c : Category, p : Nat) : async () {
    productStore.add(n, { name = n; description = d; category = c; price = p });
  };

  public query func getProductsByCategory(category : Category) : async [Product] {
    let all = productStore.values().toArray();
    all.filter(func(p) { p.category == category });
  };

  public query func getAllProducts() : async [Product] {
    productStore.values().toArray();
  };

  public shared func submitContactInquiry(n : Text, e : Text, p : Text, i : Text, b : Bool) : async () {
    contactInquiryStore.add(e, { name = n; email = e; phone = p; inquiry = i; isBulkOrder = b });
  };

  public shared func addTestimonial(id : Text, name : Text, r : Nat, rev : Text) : async () {
    testimonialStore.add(id, { customerName = name; rating = r; review = rev });
  };

  public query func getAllTestimonials() : async [Testimonial] {
    testimonialStore.values().toArray();
  };

  public shared func initializeMenu() : async () {
    productStore.clear();
    let defaults = [
      { name = "Rasgulla"; description = "Soft spongy chenna balls in syrup."; category = #signatureSweets; price = 70 },
      { name = "Misti Doi"; description = "Traditional caramelized sweetened yogurt."; category = #signatureSweets; price = 90 },
      { name = "Kaju Roll"; description = "Delicate cashew-filled celebration sweet."; category = #specialties; price = 120 }
    ];
    for (p in defaults.values()) { productStore.add(p.name, p); };
    
    // Add default testimonials
    testimonialStore.add("1", { customerName = "Amit Das"; rating = 5; review = "The Rasgulla here is exactly like my grandmother used to make. Authentic!" });
    testimonialStore.add("2", { customerName = "Priya S."; rating = 5; review = "Best Misti Doi in Habra. We never miss buying it for any occasion." });
  };
};
